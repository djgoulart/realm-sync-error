import React from 'react';
import { AppProvider, UserProvider } from '@realm/react';

import { SYNC_CONFIG } from './sync.config';
import { Login } from './app/screens/Login';
import { AppSync } from './AppSync';
import App from './App';


function RealmAppWrapper() {
  return (
    <AppProvider id={SYNC_CONFIG.appId}>
      <UserProvider fallback={Login}>
        <AppSync>
          <App />
        </AppSync>
      </UserProvider>
    </AppProvider>
  );
}

export default RealmAppWrapper;