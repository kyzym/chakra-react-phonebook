import { createSlice } from '@reduxjs/toolkit';
import { handleFilter } from './handlers';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { filterValue: '' },
  reducers: { filterList: handleFilter },
});

export const { filterList } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
