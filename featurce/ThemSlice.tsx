import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  mode: true,
};
const TheamSlice = createSlice({
  name: 'them',
  initialState,
  reducers: {
    changeThem: state => {
      state.mode = !state.mode;
    },
  },
});

export const {changeThem} = TheamSlice.actions;
export default TheamSlice.reducer;
