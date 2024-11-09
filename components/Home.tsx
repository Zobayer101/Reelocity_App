import {ScrollView, StyleSheet, Text} from 'react-native';
import React from 'react';
import Fottor from './Fotter';
import {RootState} from '../featurce/Store';
import {useSelector} from 'react-redux';

const Home = () => {
  const value = useSelector((state: RootState) => state.them.mode);
  const BG = {backgroundColor: value ? '#222' : '#ddd'};
  return (
    <>
      <ScrollView style={[style.Countuner, BG]}>
        <Text>OK</Text>
      </ScrollView>
      <Fottor />
    </>
  );
};

const style = StyleSheet.create({
  Countuner: {
    width: '100%',
  },
});
export default Home;
