import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
  isModal: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 80%;
  min-height: 60px;
  padding: 0 16px;
  background: #fff;
  border-width: 2px;
  border-color: #fff;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  margin-bottom: 8px;

  flex-direction: row;
  align-items: center;

  ${props =>
    props.isErrored &&
    css`
      border-color: #ff2536;
    `}

  ${props =>
    props.isModal &&
    props.isFocused &&
    css`
      border-color: #3f3d56;
    `}

  ${props =>
    !props.isModal &&
    props.isFocused &&
    css`
      border-color: #6c63ff;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #3f3d56;
  font-family: 'RobotoSlab-Regular';
`;

export const Icon = styled(FeatherIcon)`
  margin: 0 8px;
`;
