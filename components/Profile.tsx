import {ScrollView, Text, Button, StyleSheet} from 'react-native';
import React from 'react';
import {changeThem} from '../featurce/ThemSlice';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../featurce/Store';

import Fottor from './Fotter';

const Profile = () => {
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.them.mode);
  const BG = {backgroundColor: value ? '#222' : '#ddd'};
  return (
    <>
      <ScrollView style={[style.Countuner, BG]}>
        <Text>Profile section</Text>
        <Button
          title={value ? 'Drack' : 'light'}
          onPress={() => dispatch(changeThem())}
        />
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
export default Profile;
