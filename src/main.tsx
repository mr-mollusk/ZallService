import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { WrappedApp } from './App';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <WrappedApp />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
);
