import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
// import Icon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/AntDesign';
import Profile from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';
import {RootState} from '../featurce/Store';
import {useNavigation} from '@react-navigation/native';
const Fottor = () => {
  const value = useSelector((state: RootState) => state.them.mode);
  const Navigaror = useNavigation();

  const iconColor = value ? '#09eb2b' : '#038015';
  const IconBG = {backgroundColor: value ? '#111' : '#efe'};

  return (
    <>
      <View style={[style.OuterFotter, IconBG]}>
        <TouchableOpacity
          style={style.smallBox}
          onPress={() => Navigaror.navigate('Home')}>
          <Icon
            name="home"
            size={34}
            color={iconColor}
            style={style.IconAlign}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={style.smallBox}
          onPress={() => Navigaror.navigate('Search')}>
          <Icon
            name="search1"
            size={34}
            color={iconColor}
            style={style.IconAlign}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={style.smallBox}
          onPress={() => Navigaror.navigate('Download')}>
          <Profile
            name="download"
            size={34}
            color={iconColor}
            style={style.IconAlign}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={style.smallBox}
          onPress={() => Navigaror.navigate('Profile')}>
          <Profile
            name="user-circle-o"
            size={34}
            color={iconColor}
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
