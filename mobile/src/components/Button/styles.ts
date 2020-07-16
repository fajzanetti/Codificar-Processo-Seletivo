import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 60px;
  background: #6c63ff;
  border-radius: 50px;
  margin-top: 16px;

  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.TextInput`
  font-size: 18px;
  color: #fff;
  font-family: 'RobotoSlab-Medium';
`;
