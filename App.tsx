// import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './featurce/Store';
import React from 'react';
import Navigat from './components/Navigator';

const App = () => {
  //const value = useSelector((state: RootState) => state.them.mode);

  return (
    <Provider store={store}>
      <Navigat />
    </Provider>
  );
};

export default App;
