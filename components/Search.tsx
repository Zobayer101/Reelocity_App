import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Fottor from './Fotter';
import {RootState} from '../featurce/Store';
import {useSelector} from 'react-redux';

const Search = () => {
  const value = useSelector((state: RootState) => state.them.mode);
  const BG = {backgroundColor: value ? '#222' : '#ddd'};
  return (
    <>
      <View style={[style.SearchBOx, BG]}>
        <TextInput
          placeholder="Search"
          autoFocus={true}
          placeholderTextColor={'#555'}
          style={style.InputBox}
        />
      </View>
      <ScrollView style={[style.Countuner, BG]}>
        <TouchableOpacity style={style.ItemBox}>
          <Image
            source={require('./assets/Img/VENOM-Movie-Collector.png')}
            style={style.poster}
          />
          <View style={style.TextSection}>
            <Text style={style.TextStyle}>Vanum</Text>
            <Text style={style.TextStyle}>2023</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={style.ItemBox}>
          <Image
            source={require('./assets/Img/VENOM-Movie-Collector.png')}
            style={style.poster}
          />
          <View style={style.TextSection}>
            <Text style={style.TextStyle}>Vanum</Text>
            <Text style={style.TextStyle}>2023</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={style.ItemBox}>
          <Image
            source={require('./assets/Img/VENOM-Movie-Collector.png')}
            style={style.poster}
          />
          <View style={style.TextSection}>
            <Text style={style.TextStyle}>Vanum</Text>
            <Text style={style.TextStyle}>2023</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={style.ItemBox}>
          <Image
            source={require('./assets/Img/VENOM-Movie-Collector.png')}
            style={style.poster}
          />
          <View style={style.TextSection}>
            <Text style={style.TextStyle}>Vanum</Text>
            <Text style={style.TextStyle}>2023</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={style.ItemBox}>
          <Image
            source={require('./assets/Img/VENOM-Movie-Collector.png')}
            style={style.poster}
          />
          <View style={style.TextSection}>
            <Text style={style.TextStyle}>Vanum</Text>
            <Text style={style.TextStyle}>2023</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={style.ItemBox}>
          <Image
            source={require('./assets/Img/VENOM-Movie-Collector.png')}
            style={style.poster}
          />
          <View style={style.TextSection}>
            <Text style={style.TextStyle}>Vanum</Text>
            <Text style={style.TextStyle}>2023</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={style.ItemBox}>
          <Image
            source={require('./assets/Img/VENOM-Movie-Collector.png')}
            style={style.poster}
          />
          <View style={style.TextSection}>
            <Text style={style.TextStyle}>Vanum</Text>
            <Text style={style.TextStyle}>2023</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={style.ItemBox}>
          <Image
            source={require('./assets/Img/VENOM-Movie-Collector.png')}
            style={style.poster}
          />
          <View style={style.TextSection}>
            <Text style={style.TextStyle}>Vanum</Text>
            <Text style={style.TextStyle}>2023</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={style.ItemBox}>
          <Image
            source={require('./assets/Img/VENOM-Movie-Collector.png')}
            style={style.poster}
          />
          <View style={style.TextSection}>
            <Text style={style.TextStyle}>Vanum</Text>
            <Text style={style.TextStyle}>2023</Text>
          </View>
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
  SearchBOx: {
    width: '100%',
    height: 70,
    //backgroundColor: '#666',
    alignItems: 'center',
    justifyContent: 'center',
  },
  InputBox: {
    width: '90%',
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 18,
    paddingLeft: 10,
    color: '#fff',
    backgroundColor: '#888',
  },
  ItemBox: {
    marginTop: 10,
    width: '100%',
    height: 80,
    // backgroundColor: '#666',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  poster: {
    width: 60,
    height: 80,
  },
  TextSection: {
    backgroundColor: '#444',
    paddingLeft: 20,
    justifyContent: 'space-evenly',
    height: 80,
    width: 290,
  },
  TextStyle: {
    fontSize: 17,
    color: '#fff',
  },
});
export default Search;
