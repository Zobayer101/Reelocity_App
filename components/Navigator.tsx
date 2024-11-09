import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import Search from './Search';
import Download from './Download';
import Profile from './Profile';
import {useSelector} from 'react-redux';
import {RootState} from '../featurce/Store';

const Stack = createNativeStackNavigator();
const Navigat = () => {
  const value = useSelector((state: RootState) => state.them.mode);
  const forgound = value ? '#fff' : '#010';
  const backgroundColor = value ? '#333' : '#eee';
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            headerStyle: {backgroundColor: backgroundColor},
            headerTintColor: forgound,
          }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            title: 'Search',
            headerStyle: {backgroundColor: backgroundColor},
            headerTintColor: forgound,
          }}
        />
        <Stack.Screen
          name="Download"
          component={Download}
          options={{
            title: 'Download',
            headerStyle: {backgroundColor: backgroundColor},
            headerTintColor: forgound,
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'Profile',
            headerStyle: {backgroundColor: backgroundColor},
            headerTintColor: forgound,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigat;
