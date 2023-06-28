import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer} from './contactsSlice';
import { filterReducer } from './filterSlice';

import { authReducer } from './auth/slice'; 

//для  сохранения токена  в  local  storage  чтобы  данные текущего польз  можно
//было взять при перезагрузке страницы

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

///это то что будем  сохранять
const authPersistConfig = {
  key: 'authtoken',
  storage,
  whitelist: ['token'],
};
// const persistedUserRed = persistReducer(authPersistConfig, userReducer);

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

// eslint-disable-next-line
export default { store, persistor };