import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  border-top-width: 1px;
  border-color: #ccc;
  min-height: 150px;
  padding-top: 16px;
  margin: 0 16px;
  background: #eee;
  flex: 1;
`;

export const UserDetail = styled.View`
  flex: 1;
  padding: 16px;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 180px;
  height: 180px;
  border-width: 2px;
  border-color: #6c63ff;
  border-radius: 1000px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  padding: 16px 0;
  align-items: center;

  font-size: 32px;
  color: #3f3d56;
  font-family: 'RobotoSlab-Medium';
`;

export const ButtonAddPost = styled.TouchableOpacity`
  flex: 1;
  min-height: 60px;
  background: #6c63ff;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  padding-right: 8px;

  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
`;

export const Post = styled.View`
  background: #fff;
  margin: 8px 0;
  border-radius: 10px;
`;

export const Header = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin: 16px;
`;

export const Author = styled.Text`
  color: #6c63ff;
  font-size: 24px;
  font-family: 'RobotoSlab-Medium';
  margin: 0 16px;
`;

export const UpdateAt = styled.Text`
  flex: 1;
  position: absolute;
  color: #a5a3ac;
  right: 0;
  font-size: 12px;
  font-family: 'RobotoSlab-Regular';
  margin-top: 8px;
`;

export const Text = styled.Text`
  flex: 1;
  padding: 0 16px 16px;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const Interaction = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top-width: 2px;
  border-color: #eee;
  padding: 16px 0;
  margin: 0 16px;
`;

export const ButtonLike = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
`;

export const Liketext = styled.Text`
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const Icon = styled(FeatherIcon)``;

export const LogOut = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  padding: 16px;
`;

export const ModalContainer = styled.View`
  background-color: #eee;
  border-width: 2px;
  border-color: #a5a3ac;
  border-radius: 10px;
  flex: 1;
  margin: 50px 16px;
  min-height: 340px;
  margin-bottom: 80%;
`;

export const ButtonModalCancel = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  padding: 16px;
  align-items: center;
  justify-content: center;
`;

export const TitleModal = styled.Text`
  max-width: 80%;
  font-size: 32px;
  font-family: 'RobotoSlab-Medium';
  padding: 16px 32px 16px;
`;

export const TextModal = styled.Text`
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
  padding: 16px 32px 16px;
`;
