import {combineReducers} from '@reduxjs/toolkit';
import TheamSlice from './ThemSlice';
import IconSlice from './IconSlice';
import {SliceApi} from './ApiSlice';

const RootReducer = combineReducers({
  [SliceApi.reducerPath]: SliceApi.reducer,
  them: TheamSlice,
  page: IconSlice,
});

export default RootReducer;
