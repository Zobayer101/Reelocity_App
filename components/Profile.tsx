import {
  ScrollView,
  Text,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {changeThem} from '../featurce/ThemSlice';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../featurce/Store';
import Email from 'react-native-vector-icons/Fontisto';
import Code from 'react-native-vector-icons/Entypo';
import Moon from 'react-native-vector-icons/FontAwesome5';
import Sun from 'react-native-vector-icons/Ionicons';
import Logout from 'react-native-vector-icons/MaterialCommunityIcons';
import Fottor from './Fotter';

const Profile = () => {
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.them.mode);
  const iconColor = {color: value ? '#eee' : '#111'};
  const BG = {backgroundColor: value ? '#222' : '#ddd'};
  return (
    <>
      <ScrollView style={[style.Countuner, BG]}>
        <View style={style.ProfileImages}>
          <Image
            source={require('./assets/Img/fc22260a3d6c6692d32784bce1d8e337.jpg')}
            style={style.UserImg}
          />
        </View>
        <Text style={[style.UserName, iconColor]}>Mr: Bin</Text>
        <Text style={[style.UniqeName, iconColor]}>@bin452cx</Text>
        <TouchableOpacity style={style.EditProfiel}>
          <Text style={style.EditProfileText}>Edit profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.Item}>
          <Email name="email" color={iconColor.color} size={25} />
          <Text style={[style.ItemsTexts, iconColor]}>mdzobayer@gmail.com</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.Item}
          onPress={() => dispatch(changeThem())}>
          {value ? (
            <Moon name="moon" color={iconColor.color} size={25} />
          ) : (
            <Sun name="sunny" color={iconColor.color} size={25} />
          )}
          <Text style={[style.ItemsTexts, iconColor]}>Switch Theam</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.Item}>
          <Code name="code" color={iconColor.color} size={25} />
          <Text style={[style.ItemsTexts, iconColor]}>About Developer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.Item}>
          <Logout name="logout" color={iconColor.color} size={25} />
          <Text style={[style.ItemsTexts, iconColor]}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
      <Fottor />
    </>
  );
};

const style = StyleSheet.create({
  Countuner: {
    width: '100%',
  },
  ProfileImages: {
    width: '100%',
    height: 200,
    //backgroundColor: '#653',
    alignItems: 'center',
    justifyContent: 'center',
  },
  UserImg: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
  },
  UserName: {
    fontSize: 30,
    //color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
  },
  UniqeName: {
    // color: '#eee',
    fontSize: 18,
    textAlign: 'center',
  },
  EditProfiel: {
    height: 50,
    width: '50%',
    textAlign: 'center',
    backgroundColor: '#4a8',
    alignSelf: 'center',
    margin: 10,
    marginBottom: 30,
    borderRadius: 15,
    justifyContent: 'center',
  },
  EditProfileText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  Item: {
    width: '100%',
    height: 60,
    //backgroundColor: '#555',
    marginTop: 7,
    paddingLeft: 30,
    //justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
  },
  ItemsTexts: {
    //color: '#eee',
    fontSize: 20,
    paddingLeft: 20,
    // textAlignVertical: 'center',
  },
});
export default Profile;
