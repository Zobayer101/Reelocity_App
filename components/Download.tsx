import {
  ScrollView,
  Text,
  StyleSheet,
  // Alert,
  View,
  Image,
  Button,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import React, {useState} from 'react';
import Fottor from './Fotter';
import {RootState} from '../featurce/Store';
import {useSelector} from 'react-redux';
// import RNFS from 'react-native-fs';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import RNFetchBlob from 'rn-fetch-blob';
import ByteCalculator from '../lib/ByteCalculate';

const Download = () => {
  const [progress, setProgress] = useState(0);
  const [num, setNum] = useState(6);
  const [fileSize, setFileSize] = useState(0);
  const [downlodSpeed, setDownloadSpeed] = useState(0);
  // const [downloadedBytes, setDownloadedBayte] = useState(0);
  const progeessBar = useSharedValue(0);
  const value = useSelector((state: RootState) => state.them.mode);
  const BG = {backgroundColor: value ? '#000' : '#ddd'};

  async function requestStoragePermission() {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission',
            message: 'This app needs access to your storage to save files.',
            buttonPositive: 'Allow',
            buttonNegative: 'Deny',
            buttonNeutral: 'Ask Me Later',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    }
    return true;
  }

  //file Download
  // const downloadFile = async () => {
  //   const downloadUrl =
  //     'https://drive.google.com/uc?export=downloa&id=1ChijmYPklaJqn7YDgxvEI0-QbUXMOWW1'; // Replace with your file URL
  //   //const downloadDest = `${RNFS.DocumentDirectoryPath}/largefile.jpg`;
  //   const downloadDest = `${RNFS.ExternalDirectoryPath}/largefile.jpg`;

  //   let lastUpdateTime = Date.now();
  //   let lastBytesWritten = 0;

  //   const options = {
  //     fromUrl: downloadUrl,
  //     toFile: downloadDest,
  //     begin: async (res: {contentLength: React.SetStateAction<number>}) => {
  //       setFileSize(res.contentLength); // Set the file size when download starts
  //     },
  //     progress: (res: {bytesWritten: any; contentLength: number}) => {
  //       const currentBytesWritten = res.bytesWritten;

  //       const percentage = (currentBytesWritten / res.contentLength) * 100;

  //       // Update progress
  //       setProgress(percentage);
  //       progeessBar.value = withTiming(percentage, {duration: 100});
  //       setDownloadedBayte(currentBytesWritten);

  //       // Calculate download speed
  //       const currentTime = Date.now();
  //       const timeDiff = (currentTime - lastUpdateTime) / 1000; // Time in seconds
  //       const bytesDiff = currentBytesWritten - lastBytesWritten;
  //       const speed = bytesDiff / timeDiff / 1024; // Speed in KB/s

  //       setDownloadSpeed(Number(speed.toFixed(2))); // Update speed in KB/s

  //       lastUpdateTime = currentTime;
  //       lastBytesWritten = currentBytesWritten;
  //     },
  //   };

  //   try {
  //     const download = RNFS.downloadFile(options);
  //     await download.promise; // Wait for download to complete
  //     setProgress(100);
  //     progeessBar.value = withTiming(100, {duration: 100});
  //     Alert.alert('Download complete!');
  //   } catch (err) {
  //     console.error(err);
  //     Alert.alert('Download failed!');
  //   }
  // };

  //file download with blobs
  const fileDownloadwithBolbs = async () => {
    await requestStoragePermission();
    // console.log(Granted);
    // if (!Granted) {
    //   return;
    // }
    const DownloadURL =
      'https://drive.google.com/uc?export=download&id=10uDUhH0OiVPi8FZ56dD1toaXoBMuwLw4';
    const {dirs} = RNFetchBlob.fs;
    const path = `${dirs.DownloadDir}/mySongx${num}.mp4`;

    let lastTimeUpdate = Date.now();
    let lastByteWritin = 0;

    RNFetchBlob.config({
      fileCache: true,
      path,
    })
      .fetch('GET', DownloadURL)
      .progress((resive, total) => {
        const currentByteWriten = resive;
        const percentage = (resive / total) * 100;
        setFileSize(total);
        // console.log(resive);
        // console.log(total);

        setProgress(percentage);
        progeessBar.value = withTiming(percentage, {duration: 200});
        const CurrentTime = Date.now();
        const timeDiff = (CurrentTime - lastTimeUpdate) / 1000;
        const byteDiff = currentByteWriten - lastByteWritin;
        const speed = byteDiff / timeDiff;
        setDownloadSpeed(speed);
        lastTimeUpdate = CurrentTime;
        lastByteWritin = currentByteWriten;
      })
      .then(() => {
        setProgress(100);
        progeessBar.value = withTiming(100, {duration: 200});
        //console.log(res.path());
      })
      .catch(error => {
        console.log(error);
      });
  };
  const progressbarStyle = useAnimatedStyle(() => ({
    width: `${progeessBar.value}%`,
  }));

  return (
    <>
      <ScrollView style={[style.Countuner, BG]}>
        <View style={style.DownloaderCon}>
          <View style={style.ImageSection}>
            <Image
              source={require('./assets/Img/ad7e62db75fb5e2b182ca720fdd5229a.jpg')}
              style={style.Images}
            />
            <View style={style.TextSection}>
              <View style={style.MovieName}>
                <Text style={style.MovieNameText}>Venom</Text>
              </View>
              <View style={style.showDitias}>
                <Text style={style.NextText}>
                  {downlodSpeed ? `${ByteCalculator(downlodSpeed)}/s` : '0 b/s'}
                </Text>
                <Text style={style.NextText}>
                  {fileSize ? `${ByteCalculator(fileSize)}` : '0 bit'}
                </Text>
              </View>
            </View>
          </View>
          <View style={style.FotterBar}>
            <View style={style.outerBar}>
              <Animated.View style={[style.ProgressBars, progressbarStyle]} />
            </View>
            <Text style={style.SecounText}>{progress.toFixed(2)} %</Text>
          </View>
        </View>
        <Button
          title="Download"
          onPress={() => {
            fileDownloadwithBolbs();
            setNum(num + 1);
          }}
        />
        <Text>Download section</Text>
      </ScrollView>
      <Fottor />
    </>
  );
};
const style = StyleSheet.create({
  Countuner: {
    width: '100%',
    paddingTop: 30,
  },
  DownloaderCon: {
    width: '100%',
    height: 110,
    marginTop: 20,
    //backgroundColor: '#888',
  },
  ImageSection: {
    width: '100%',
    height: '80%',
    // backgroundColor: '#490',
    flexDirection: 'row',
  },
  Images: {
    height: 85,
    width: 70,
    marginLeft: 10,
  },
  TextSection: {
    width: '80%',
    height: 87,
    //backgroundColor: '#c3f',
  },
  MovieName: {
    width: '100%',
    height: 50,
    // backgroundColor: '#4fc',
  },
  MovieNameText: {
    fontSize: 18,
    paddingLeft: 10,
    color: '#fff',
  },
  showDitias: {
    width: '100%',
    height: 37,
    // backgroundColor: '#5cf',
    flexDirection: 'row',
    alignItems: 'center',
  },
  SecounText: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 10,
  },
  NextText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 40,
  },
  FotterBar: {
    width: '100%',
    height: 20,
    // backgroundColor: '#fcc',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  outerBar: {
    width: 300,
    height: 8,
    // backgroundColor: '#cfc',

    justifyContent: 'center',
  },
  ProgressBars: {
    height: 2,
    width: '100%',
    backgroundColor: '#0fc',
    borderRadius: 5,
  },
});
export default Download;
