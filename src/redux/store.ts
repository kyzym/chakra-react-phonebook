import { configureStore } from '@reduxjs/toolkit';
import { contactsSliceAPI } from './contacts/contactsSlice';

import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { filterReducer } from './filter/filtersSlice';

import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import authSlice, { AuthInitialState } from './auth/authSlice';
import { useDispatch } from 'react-redux';

const authPersistConfig = {
  key: 'auth',
  storage,
};

export const store = configureStore({
  reducer: {
    [contactsSliceAPI.reducerPath]: contactsSliceAPI.reducer,
    auth: persistReducer<AuthInitialState>(
      authPersistConfig,
      authSlice.reducer
    ),
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(contactsSliceAPI.middleware),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
