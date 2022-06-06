import React, { ReactNode } from 'react';
import { useUser } from '@realm/react';

import { MainContext } from './app/models';

interface IProps {
  children: ReactNode;
}

export function AppSync({ children }: IProps) {
  const user = useUser();
  const { RealmProvider } = MainContext;

  return (
    <RealmProvider sync={{ user, partitionValue: 'portal' }}>
      {children}
    </RealmProvider>
  );
}
