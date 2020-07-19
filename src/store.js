import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { userReducer } from '@src/stores/userModule.js';

const persistConfig = {
  key       : 'starter-react-spa',
  storage,
  whitelist : ['xAccessToken']
};

export const store = createStore(
  combineReducers({
    user    : persistReducer(persistConfig, userReducer),
  })
);

export const persistor = persistStore(store);