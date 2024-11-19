import {configureStore} from '@reduxjs/toolkit';
import RootReducer from './RootReducer';
// import { getDefaultConfig } from '@react-native/metro-config';
import {SliceApi} from './ApiSlice';

const store = configureStore({
  reducer: RootReducer,
  middleware: getDefaultMiddlewar => {
    return getDefaultMiddlewar().concat(SliceApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
