import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
// import Icon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/AntDesign';
import Profile from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../featurce/Store';
import {useNavigation} from '@react-navigation/native';
import {ChangePage} from '../featurce/IconSlice';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

//Navigarion Type Implimant
type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  Download: undefined;
  Profile: undefined;
};
type NewHomeScreenNavigarionProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;
type NewSearchNavigarorProp = NativeStackNavigationProp<
  RootStackParamList,
  'Search'
>;
type NewDownloadNavigatorProp = NativeStackNavigationProp<
  RootStackParamList,
  'Download'
>;
type NewProfileNavigarorProp = NativeStackNavigationProp<
  RootStackParamList,
  'Profile'
>;

const Fottor = () => {
  const value = useSelector((state: RootState) => state.them.mode);
  const Pages = useSelector((state: RootState) => state.page.page);
  const dispatch = useDispatch();
  const HomeNavigaror = useNavigation<NewHomeScreenNavigarionProp>();
  const SearchNavigaror = useNavigation<NewSearchNavigarorProp>();
  const DownloadNavigror = useNavigation<NewDownloadNavigatorProp>();
  const ProfileNavigaror = useNavigation<NewProfileNavigarorProp>();

  const Homes = Pages === 'Home' ? '#f0c' : value ? '#09eb2b' : '#038015';
  const Searchs = Pages === 'Search' ? '#f0c' : value ? '#09eb2b' : '#038015';
  const DownLoads =
    Pages === 'Download' ? '#f0c' : value ? '#09eb2b' : '#038015';
  const Profiles = Pages === 'Profile' ? '#f0c' : value ? '#09eb2b' : '#038015';

  const IconBG = {backgroundColor: value ? '#111' : '#efe'};

  return (
    <>
      <View style={[style.OuterFotter, IconBG]}>
        <TouchableOpacity
          style={style.smallBox}
          onPress={() => {
            HomeNavigaror.navigate('Home');
            dispatch(ChangePage('Home'));
          }}>
          <Icon name="home" size={34} color={Homes} style={style.IconAlign} />
        </TouchableOpacity>
        <TouchableOpacity
          style={style.smallBox}
          onPress={() => {
            SearchNavigaror.navigate('Search');
            dispatch(ChangePage('Search'));
          }}>
          <Icon
            name="search1"
            size={34}
            color={Searchs}
            style={style.IconAlign}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={style.smallBox}
          onPress={() => {
            DownloadNavigror.navigate('Download');
            dispatch(ChangePage('Download'));
          }}>
          <Profile
            name="download"
            size={34}
            color={DownLoads}
            style={style.IconAlign}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={style.smallBox}
          onPress={() => {
            ProfileNavigaror.navigate('Profile');
            dispatch(ChangePage('Profile'));
          }}>
          <Profile
            name="user-circle-o"
            size={34}
            color={Profiles}
            style={style.IconAlign}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  OuterFotter: {
    width: '100%',

    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  smallBox: {
    width: 65,
    height: 60,
    //backgroundColor: '#9fc',
    justifyContent: 'center',
  },
  IconAlign: {
    textAlign: 'center',
  },
});

export default Fottor;
