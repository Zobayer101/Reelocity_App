import {combineReducers} from '@reduxjs/toolkit';
import TheamSlice from './ThemSlice';

const RootReducer = combineReducers({
  them: TheamSlice,
});

export default RootReducer;
