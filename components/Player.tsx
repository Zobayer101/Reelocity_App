import React, {useEffect, useRef, useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';

import {RouteProp, useNavigation} from '@react-navigation/native';
import Video, {VideoRef} from 'react-native-video';
import Orientation from 'react-native-orientation-locker';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import {Float} from 'react-native/Libraries/Types/CodegenTypes';
import Backword from 'react-native-vector-icons/AntDesign';
import Sounds from 'react-native-vector-icons/Ionicons';
import Zoom from 'react-native-vector-icons/MaterialIcons';
import Slider from '@react-native-community/slider';
import TimeCalculator from '../lib/TimeCalculate';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Player: {itemId: number; link: string};
};

type HomeScreenNavigarot = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

type PlayerScreenRouteProp = RouteProp<RootStackParamList, 'Player'>;
const Player = ({route}: {route: PlayerScreenRouteProp}) => {
  const [isPose, setPose] = useState(false);
  const [isMute, setMute] = useState(false);
  const [isBuffer, setBuffer] = useState(true);
  const [showController, setShowController] = useState(false);
  const [progress, setProgress] = useState<{
    currentTime: Float;
    playableDuration: Float;
    seekableDuration: Float;
  }>();
  const HomeScreenNavigator = useNavigation<HomeScreenNavigarot>();

  type ResizeModeType = 'cover' | 'none' | 'stretch' | 'contain';
  const [isResize, setResize] = useState<ResizeModeType>('cover');

  const VideoRefs = useRef<VideoRef>(null);

  useEffect(() => {
    Orientation.lockToLandscape();
    SystemNavigationBar.fullScreen(true);
  }, []);

  const FastBackword = () => {
    VideoRefs.current?.seek((progress?.currentTime ?? 0) - 30, 10);
  };

  const FastForWord = () => {
    VideoRefs.current?.seek((progress?.currentTime ?? 0) + 30, 10);
  };

  const {link} = route.params;
  let bgOpacity = {backgroundColor: showController ? '#00000000' : '#0f000029'};
  let ControllOpacity = {opacity: showController ? 0 : 1};
  return (
    <View style={style.PlayerBox}>
      <StatusBar hidden />
      <View>
        <TouchableOpacity style={style.VideoBackground}>
          <Video
            style={style.VideoStyle}
            source={{
              uri: link,
              // uri: 'https://drive.google.com/uc?export=download&id=10uDUhH0OiVPi8FZ56dD1toaXoBMuwLw4',
            }}
            paused={isPose}
            muted={isMute}
            resizeMode={isResize}
            //onLoad={videoInfo => console.log(videoInfo)}
            onBuffer={buffer => {
              setBuffer(buffer.isBuffering);
            }}
            ref={VideoRefs}
            onProgress={pro => {
              setProgress(pro);
            }}
          />
          <TouchableOpacity
            style={[style.VideoController, bgOpacity]}
            onPress={() => setShowController(!showController)}>
            {!isBuffer ? (
              <View style={[style.ControllBox, ControllOpacity]}>
                <View style={style.HeaderStyle}>
                  <TouchableOpacity
                    onPress={() => {
                      HomeScreenNavigator.navigate('Home');
                      setPose(true);
                    }}>
                    <Backword name="arrowleft" size={30} color={'#fff'} />
                  </TouchableOpacity>
                  <TouchableOpacity style={style.textSection}>
                    <Text style={style.TitleText}>Venmo movie full hd mp4</Text>
                  </TouchableOpacity>
                  {isMute ? (
                    <TouchableOpacity onPress={() => setMute(false)}>
                      <Sounds name="volume-mute" size={40} color={'#fff'} />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={() => setMute(true)}>
                      <Sounds name="volume-high" size={40} color={'#fff'} />
                    </TouchableOpacity>
                  )}
                </View>
                <View style={style.playPause}>
                  <TouchableOpacity onPress={FastBackword}>
                    <Backword name="fastbackward" size={30} color={'#f0f0f0'} />
                  </TouchableOpacity>
                  {isPose ? (
                    <TouchableOpacity onPress={() => setPose(false)}>
                      <Backword name="play" size={60} color={'#f0f0f0'} />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={() => setPose(true)}>
                      <Backword name="pause" size={60} color={'#f0f0f0'} />
                    </TouchableOpacity>
                  )}
                  <TouchableOpacity onPress={FastForWord}>
                    <Backword name="fastforward" size={30} color={'#f0f0f0'} />
                  </TouchableOpacity>
                </View>
                <View style={style.progressBarBox}>
                  <Text style={style.TimeColor}>
                    {TimeCalculator(progress?.currentTime || 0)}
                  </Text>
                  <Slider
                    style={style.SliderStyle}
                    minimumValue={0}
                    maximumValue={progress?.seekableDuration}
                    minimumTrackTintColor="red"
                    maximumTrackTintColor="white"
                    thumbTintColor="red"
                    value={progress?.currentTime}
                    onValueChange={val => {
                      VideoRefs.current?.seek(val);
                    }}
                  />
                  <Text style={style.TimeColor}>
                    {TimeCalculator(progress?.seekableDuration || 0)}
                  </Text>
                  {isResize === 'cover' ? (
                    <TouchableOpacity
                      style={style.ZoomButton}
                      onPress={() => setResize('none')}>
                      <Zoom name="zoom-in-map" size={30} color={'#eee'} />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      style={style.ZoomButton}
                      onPress={() => setResize('cover')}>
                      <Zoom name="zoom-out-map" size={30} color={'#eee'} />
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            ) : (
              <ActivityIndicator
                style={style.Loding}
                size={80}
                color={'#692eff'}
              />
            )}
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  PlayerBox: {
    flex: 1,
    backgroundColor: 'black',
  },
  VideoStyle: {
    width: '100%',
    height: '100%',
  },
  VideoBackground: {
    width: '100%',
    height: '100%',
  },
  VideoController: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  Loding: {
    flex: 1,
  },
  ControllBox: {
    width: '100%',
    height: '100%',

    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
  },
  playPause: {
    width: '85%',
    height: 100,
    // marginTop: 50,
    //backgroundColor: '#9fc',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  progressBarBox: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#80f',
  },
  SliderStyle: {
    width: '80%',
  },
  TimeColor: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  HeaderStyle: {
    height: 50,
    width: '100%',
    backgroundColor: '#4e49498c',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textSection: {
    height: '100%',
    width: '80%',
    //backgroundColor: '#0fa',
    justifyContent: 'center',
  },
  TitleText: {
    color: '#eee',
    fontSize: 20,
  },
  ZoomButton: {
    justifyContent: 'center',
    height: 70,
    width: 80,
    //backgroundColor: '#222',
    paddingLeft: 20,
  },
});
export default Player;
