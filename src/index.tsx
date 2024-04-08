import { ColorModeScript } from '@chakra-ui/react';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import Router from './router';
import Layout from './components/Layout';
import { ModalProvider } from './context/ModalContext';
import { AccountProvider } from './context/AccountContext';
import './i18n';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <AccountProvider>
      <ModalProvider>
        <ColorModeScript />
        <Layout>
          <Router />
        </Layout>
      </ModalProvider>
    </AccountProvider>
  </React.StrictMode>
);
