import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, Image } from 'react-native';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import { useAuth } from '../hooks/auth';

import splashScreen from '../assets/splash.png';

const Routes: React.FC = () => {
  const { loading, user } = useAuth();

  const [splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => setSplash(false), 3000);
  }, []);

  if (loading || splash) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={splashScreen} />
      </View>
    );
  }

  return user ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
