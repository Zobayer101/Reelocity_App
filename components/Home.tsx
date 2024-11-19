import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Fottor from './Fotter';
import {RootState} from '../featurce/Store';
import {useDispatch, useSelector} from 'react-redux';
import Eye from 'react-native-vector-icons/FontAwesome';
import Star from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {ChangePage} from '../featurce/IconSlice';
import Carousel from './Carousel';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Orientation from 'react-native-orientation-locker';
import {useFetchItemsQuery} from '../featurce/ApiSlice';
// import {FlatList} from 'react-native-gesture-handler';
// import SystemNavigationBar from 'react-native-system-navigation-bar';

//Navigaror type implimant
type RootStackParmList = {
  Search: undefined;
  Player: {itemId: number; link: string};
};

type NewSearchScreenNavigarorProp = NativeStackNavigationProp<
  RootStackParmList,
  'Search'
>;
type NewPlayerScreenNavigatorProp = NativeStackNavigationProp<
  RootStackParmList,
  'Player'
>;

const Home = () => {
  const SearchNavigaror = useNavigation<NewSearchScreenNavigarorProp>();
  const PlayerNavigaror = useNavigation<NewPlayerScreenNavigatorProp>();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [item, setItems] = useState([]);
  const value = useSelector((state: RootState) => state.them.mode);
  const {data, isFetching} = useFetchItemsQuery({page});
  useEffect(() => {
    Orientation.lockToPortrait();
    //SystemNavigationBar.fullScreen(false);
  }, []);
  useEffect(() => {
    if (data) {
      setItems(Item => [...Item, ...data]);
    }
  }, [data]);

  const MoreDatalode = () => {
    setPage(newPage => newPage + 1);
  };
  const BG = {backgroundColor: value ? '#000' : '#ddd'};
  const handelScroll = ({nativeEvent}: any) => {
    const {layoutMeasurement, contentOffset, contentSize} = nativeEvent;
    if (layoutMeasurement.height + contentOffset.y >= contentSize.height - 20) {
      item[item.length - 1][0] === null
        ? Alert.alert('empty data')
        : MoreDatalode();
    }
  };
  // console.log(item);
  // console.log(item.length);
  //console.log(item[item.length - 1][0] === null);
  return (
    <>
      <ScrollView
        style={[style.Countuner, BG]}
        onScroll={handelScroll}
        scrollEventThrottle={16}>
        <Carousel />
        <View style={style.SearchBOx}>
          <TouchableOpacity
            style={[style.SearchNOw]}
            onPress={() => {
              SearchNavigaror.navigate('Search');
              dispatch(ChangePage('Search'));
            }}>
            <Eye name="search" size={30} color={'#777'} />
            <Text style={style.SearchText}>Search in Reelocity..</Text>
          </TouchableOpacity>
        </View>
        <View style={style.ContentBox}>
          <Text style={style.HederText}>Most Popular</Text>
          {/* Movie -----------------------------------------------------------------------------Item */}

          {item.map((value: any, index: React.Key | null | undefined) => (
            <View style={style.ImaeCon} key={index}>
              <TouchableOpacity
                style={style.ContentImageBox}
                onPress={() =>
                  PlayerNavigaror.navigate('Player', {
                    itemId: value[0]?.id,
                    link: value[0]?.link,
                  })
                }>
                <View style={style.ContentHeder}>
                  {/* <Text style={style.Logo}>Logo</Text> */}
                  <Image
                    source={require('./assets/Img/Logo.png')}
                    style={style.LogoImage}
                  />

                  <View style={style.UserView}>
                    <Eye name="eye" size={20} color={'#fff'} />
                    <Text style={style.ViewText}> {value[0]?.view || ''}</Text>
                  </View>
                </View>
                <Image
                  source={{
                    uri: `http://192.168.222.224:3300/uploads/${value[0]?.poster}`,
                  }}
                  style={style.Poster}
                />
                <View style={style.MovieRatting}>
                  <View style={style.rattingStar}>
                    <Star name="star" size={18} color={'#FFD700'} />
                    <Text style={style.ViewText}>{value[0]?.star || ''}</Text>
                  </View>
                  <Text style={style.ViewText}>
                    {value[0]?.movieName || ''}
                  </Text>
                </View>
              </TouchableOpacity>

              {/* Secound ------------------------------------------------------------Item */}

              <TouchableOpacity
                style={style.ContentImageBox}
                onPress={() =>
                  PlayerNavigaror.navigate('Player', {
                    itemId: value[0]?.id,
                    link: value[0]?.link,
                  })
                }>
                <View style={style.ContentHeder}>
                  {/* <Text style={style.Logo}>Logo</Text> */}
                  <Image
                    source={require('./assets/Img/Logo.png')}
                    style={style.LogoImage}
                  />
                  <View style={style.UserView}>
                    <Eye name="eye" size={20} color={'#fff'} />
                    <Text style={style.ViewText}> {value[1]?.view || ''}</Text>
                  </View>
                </View>
                <Image
                  source={{
                    uri: `http://192.168.222.224:3300/uploads/${value[1]?.poster}`,
                  }}
                  style={style.Poster}
                />
                <View style={style.MovieRatting}>
                  <View style={style.rattingStar}>
                    <Star name="star" size={18} color={'#FFD700'} />
                    <Text style={style.ViewText}>{value[1]?.star || ''}</Text>
                  </View>
                  <Text style={style.ViewText}>
                    {value[1]?.movieName || ''}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
          {isFetching && <ActivityIndicator size={40} color={'#0fc'} />}
        </View>
      </ScrollView>
      <Fottor />
    </>
  );
};

const style = StyleSheet.create({
  Countuner: {
    width: '100%',
  },
  SearchBOx: {
    width: '100%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  SearchNOw: {
    backgroundColor: '#eee',
    width: '90%',
    height: 50,
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
    paddingLeft: 20,
  },
  SearchText: {
    fontSize: 20,
    paddingLeft: 5,
    color: '#777',
  },
  ContentBox: {
    width: '100%',

    padding: 5,
  },
  HederText: {
    fontSize: 25,
    color: '#09eb2b',
    fontWeight: '500',
    padding: 5,
  },
  ImaeCon: {
    width: '100%',
    //backgroundColor: '#05a',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  ContentImageBox: {
    width: 180,
    height: 290,
    position: 'relative',
  },
  Poster: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: 180,
    height: 240,
  },
  ContentHeder: {
    position: 'absolute',
    zIndex: 1,
    width: 180,
    height: 40,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: '#4f58567a',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Logo: {
    color: '#0fc',
    paddingLeft: 4,
  },
  UserView: {
    flexDirection: 'row',
    width: 60,
    justifyContent: 'space-around',
  },
  ViewText: {
    color: '#fff',
    marginLeft: 5,
  },
  MovieRatting: {
    width: 180,
    height: 50,
    //alignItems: 'center',
    backgroundColor: '#333131',
    //flexDirection: 'row',
    padding: 2,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    //elevation: 2,
  },
  rattingStar: {
    flexDirection: 'row',
  },
  LogoImage: {
    width: 50,
    height: 50,
  },
});
export default Home;
