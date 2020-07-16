import React from 'react';
import { View, Button } from 'react-native';

import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

const Main: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <Container>
      <Button title="Sair" onPress={signOut} />
    </Container>
  );
};

export default Main;
