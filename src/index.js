import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { store } from './App/store';
import { Provider } from 'react-redux';
import './i18n';
import { I18nextProvider } from 'react-i18next';
// import { useSSR } from 'react-i18n';
import i18next from 'i18next';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </I18nextProvider>
  </Provider>
);
