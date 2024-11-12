// import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './featurce/Store';
import React from 'react';
import Navigat from './components/Navigator';
// import { PermissionsAndroid, Platform} from 'react-native';

const App = () => {
  //const value = useSelector((state: RootState) => state.them.mode);
  // useEffect(() => {
  //   (async () => {
  //     if (Platform.OS === 'android') {
  //       try {
  //         const granted = await PermissionsAndroid.request(
  //           PermissionsAndroid.PERMISSIONS.CAMERA,
  //           {
  //             title: 'Cool Photo App Camera Permission',
  //             message:
  //               'Cool Photo App needs access to your camera ' +
  //               'so you can take awesome pictures.',
  //             buttonNeutral: 'Ask Me Later',
  //             buttonNegative: 'Cancel',
  //             buttonPositive: 'OK',
  //           },
  //         );
  //         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //           console.log('You can use the camera');
  //         } else {
  //           console.log('Camera permission denied');
  //         }
  //       } catch (err) {
  //         console.warn(err);
  //       }
  //     }
  //     return true;
  //   })();
  // }, []);

  return (
    <Provider store={store}>
      <Navigat />
    </Provider>
  );
};

export default App;
