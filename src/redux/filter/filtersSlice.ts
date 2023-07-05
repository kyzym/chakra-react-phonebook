import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { filterValue: '' },
  reducers: {
    filterList: (state, action) => {
      state.filterValue = action.payload;
    },
  },
});

export const { filterList } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
