import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
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

  const value = useSelector((state: RootState) => state.them.mode);

  useEffect(() => {
    Orientation.lockToPortrait();
    //SystemNavigationBar.fullScreen(false);
  }, []);

  const BG = {backgroundColor: value ? '#000' : '#ddd'};
  //const ReversBG = {backgroundColor: value ? '#ddd' : '#222'};
  return (
    <>
      <ScrollView style={[style.Countuner, BG]}>
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
          {/* Movie Item */}
          <View style={style.ImaeCon}>
            <TouchableOpacity
              style={style.ContentImageBox}
              onPress={() =>
                PlayerNavigaror.navigate('Player', {
                  itemId: 86,
                  link: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                })
              }>
              <View style={style.ContentHeder}>
                <Text style={style.Logo}>Logo</Text>

                <View style={style.UserView}>
                  <Eye name="eye" size={20} color={'#fff'} />
                  <Text style={style.ViewText}>20K</Text>
                </View>
              </View>
              <Image
                source={require('./assets/Img/VENOM-Movie-Collector.png')}
                style={style.Poster}
              />
              <View style={style.MovieRatting}>
                <View style={style.rattingStar}>
                  <Star name="star" size={18} color={'#FFD700'} />
                  <Text style={style.ViewText}>7.0</Text>
                </View>
                <Text style={style.ViewText}>VENOM</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={style.ContentImageBox}>
              <View style={style.ContentHeder}>
                <Text style={style.Logo}>Logo</Text>

                <View style={style.UserView}>
                  <Eye name="eye" size={20} color={'#fff'} />
                  <Text style={style.ViewText}>20K</Text>
                </View>
              </View>
              <Image
                source={require('./assets/Img/AVATAR-2-The-Way-Of-Water-Trailer.png')}
                style={style.Poster}
              />
              <View style={style.MovieRatting}>
                <View style={style.rattingStar}>
                  <Star name="star" size={18} color={'#FFD700'} />
                  <Text style={style.ViewText}>7.6</Text>
                </View>
                <Text style={style.ViewText}>Avatar</Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* Movie Item */}
          <View style={style.ImaeCon}>
            <TouchableOpacity style={style.ContentImageBox}>
              <View style={style.ContentHeder}>
                <Text style={style.Logo}>Logo</Text>

                <View style={style.UserView}>
                  <Eye name="eye" size={20} color={'#fff'} />
                  <Text style={style.ViewText}>20K</Text>
                </View>
              </View>
              <Image
                source={require('./assets/Img/VENOM-Movie-Collector.png')}
                style={style.Poster}
              />
              <View style={style.MovieRatting}>
                <View style={style.rattingStar}>
                  <Star name="star" size={18} color={'#FFD700'} />
                  <Text style={style.ViewText}>7.0</Text>
                </View>
                <Text style={style.ViewText}>VENOM</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={style.ContentImageBox}>
              <View style={style.ContentHeder}>
                <Text style={style.Logo}>Logo</Text>

                <View style={style.UserView}>
                  <Eye name="eye" size={20} color={'#fff'} />
                  <Text style={style.ViewText}>20K</Text>
                </View>
              </View>
              <Image
                source={require('./assets/Img/AVATAR-2-The-Way-Of-Water-Trailer.png')}
                style={style.Poster}
              />
              <View style={style.MovieRatting}>
                <View style={style.rattingStar}>
                  <Star name="star" size={18} color={'#FFD700'} />
                  <Text style={style.ViewText}>7.6</Text>
                </View>
                <Text style={style.ViewText}>Avatar</Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* Movie Item */}
          <View style={style.ImaeCon}>
            <TouchableOpacity style={style.ContentImageBox}>
              <View style={style.ContentHeder}>
                <Text style={style.Logo}>Logo</Text>

                <View style={style.UserView}>
                  <Eye name="eye" size={20} color={'#fff'} />
                  <Text style={style.ViewText}>20K</Text>
                </View>
              </View>
              <Image
                source={require('./assets/Img/VENOM-Movie-Collector.png')}
                style={style.Poster}
              />
              <View style={style.MovieRatting}>
                <View style={style.rattingStar}>
                  <Star name="star" size={18} color={'#FFD700'} />
                  <Text style={style.ViewText}>7.0</Text>
                </View>
                <Text style={style.ViewText}>VENOM</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={style.ContentImageBox}>
              <View style={style.ContentHeder}>
                <Text style={style.Logo}>Logo</Text>

                <View style={style.UserView}>
                  <Eye name="eye" size={20} color={'#fff'} />
                  <Text style={style.ViewText}>20K</Text>
                </View>
              </View>
              <Image
                source={require('./assets/Img/AVATAR-2-The-Way-Of-Water-Trailer.png')}
                style={style.Poster}
              />
              <View style={style.MovieRatting}>
                <View style={style.rattingStar}>
                  <Star name="star" size={18} color={'#FFD700'} />
                  <Text style={style.ViewText}>7.6</Text>
                </View>
                <Text style={style.ViewText}>Avatar</Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* Movie Item */}
          <View style={style.ImaeCon}>
            <TouchableOpacity style={style.ContentImageBox}>
              <View style={style.ContentHeder}>
                <Text style={style.Logo}>Logo</Text>

                <View style={style.UserView}>
                  <Eye name="eye" size={20} color={'#fff'} />
                  <Text style={style.ViewText}>20K</Text>
                </View>
              </View>
              <Image
                source={require('./assets/Img/VENOM-Movie-Collector.png')}
                style={style.Poster}
              />
              <View style={style.MovieRatting}>
                <View style={style.rattingStar}>
                  <Star name="star" size={18} color={'#FFD700'} />
                  <Text style={style.ViewText}>7.0</Text>
                </View>
                <Text style={style.ViewText}>VENOM</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={style.ContentImageBox}>
              <View style={style.ContentHeder}>
                <Text style={style.Logo}>Logo</Text>

                <View style={style.UserView}>
                  <Eye name="eye" size={20} color={'#fff'} />
                  <Text style={style.ViewText}>20K</Text>
                </View>
              </View>
              <Image
                source={require('./assets/Img/AVATAR-2-The-Way-Of-Water-Trailer.png')}
                style={style.Poster}
              />
              <View style={style.MovieRatting}>
                <View style={style.rattingStar}>
                  <Star name="star" size={18} color={'#FFD700'} />
                  <Text style={style.ViewText}>7.6</Text>
                </View>
                <Text style={style.ViewText}>Avatar</Text>
              </View>
            </TouchableOpacity>
          </View>
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
    //backgroundColor: '#4f58567a',
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
});
export default Home;
