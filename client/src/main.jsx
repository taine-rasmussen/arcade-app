import { PersistGate } from 'redux-persist/integration/react';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import authReducer from './state';
import React from 'react'
import App from './App'
import './index.css'
import {
  persistReducer,
  persistStore,
  REHYDRATE,
  REGISTER,
  PERSIST,
  FLUSH,
  PAUSE,
  PURGE
} from 'redux-persist';

const persistConfig = { key: "root", storage, version: 1 };
const persistedReducer = persistReducer(persistConfig, authReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [REHYDRATE, REGISTER, PERSIST, FLUSH, PAUSE, PURGE]
      }
    })
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
