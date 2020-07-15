import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

// import { Container } from './styles';

const src: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#6C63FF" />
    <View style={{ flex: 1, backgroundColor: '#DFDFDF' }}>
      <Routes />
    </View>
  </NavigationContainer>
);

export default src;
