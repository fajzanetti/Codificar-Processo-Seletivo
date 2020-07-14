import React from 'react';
import { View, StatusBar } from 'react-native';

// import { Container } from './styles';

const src: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#6C63FF" />
    <View style={{ flex: 1, backgroundColor: '#DFDFDF' }} />
  </>
);

export default src;
