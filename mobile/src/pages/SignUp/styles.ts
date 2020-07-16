import styled, { css } from 'styled-components/native';

interface Keyboard {
  isKeyboard: boolean;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  bottom: 32px;
`;

export const Image = styled.Image<Keyboard>`
  ${props =>
    props.isKeyboard &&
    css`
      top: 64px;
    `}
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #3f3d56;
  font-family: 'RobotoSlab-Medium';

  margin: 0 0 24px;
`;

export const BackToSignIn = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 16px 0;

  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const BackToSignInText = styled.Text`
  color: #6c63ff;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
  margin-left: 16px;
`;
