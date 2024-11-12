import {createSlice} from '@reduxjs/toolkit';

const IconSlice = createSlice({
  name: 'Icons',
  initialState: {page: 'Home'},
  reducers: {
    ChangePage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const {ChangePage} = IconSlice.actions;
export default IconSlice.reducer;
