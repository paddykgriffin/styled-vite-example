import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import 'normalize.css';
import './styles/global.scss';

import { disableReactDevTools } from '@fvilers/disable-react-devtools';

import { Provider } from 'react-redux';
import { store } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';

import Bootstrap from './Bootstrap';
import AppThemeProvider from './utils/AppThemeProvider';

let persistor = persistStore(store);

if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOMClient.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={<div>loading</div>} persistor={persistor}>
          <AppThemeProvider>
            <Bootstrap />
          </AppThemeProvider>
        </PersistGate>
      </Provider>
    </React.StrictMode>,
  );
} else {
  throw new Error('No root container found');
}
