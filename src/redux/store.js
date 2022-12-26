import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { contactsSliceAPI } from './contacts/contactsSlice';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { filterReducer } from './filter/filtersSlice';

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import authSlice from './auth/authSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
};

export const store = configureStore({
  reducer: {
    [contactsSliceAPI.reducerPath]: contactsSliceAPI.reducer,
    auth: persistReducer(authPersistConfig, authSlice.reducer),
    filter: filterReducer,
  },

  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactsSliceAPI.middleware,
  ],
});

export const persistor = persistStore(store);
