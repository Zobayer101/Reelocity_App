import {combineReducers} from '@reduxjs/toolkit';
import TheamSlice from './ThemSlice';
import IconSlice from './IconSlice';

const RootReducer = combineReducers({
  them: TheamSlice,
  page: IconSlice,
});

export default RootReducer;
