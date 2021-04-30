import React from 'react';
import AppLayout from './app/components/app-layout';
import CardListScreen from './app/screens/card-list-screen';

import WelcomeScreen from './app/screens/welcome-screen';

export default function App() {
  return (
    <AppLayout>
      {/* <CardListScreen /> */}
      <CardListScreen />
    </AppLayout>
  );
}
