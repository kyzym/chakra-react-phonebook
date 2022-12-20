import { configureStore } from '@reduxjs/toolkit';
import { contactsSliceAPI } from './contactsSlice';

import { filterReducer } from './filtersSlice';

export const store = configureStore({
  reducer: {
    [contactsSliceAPI.reducerPath]: contactsSliceAPI.reducer,
    filter: filterReducer,
  },

  tagTypes: ['Contact'],

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsSliceAPI.middleware,
  ],
});
