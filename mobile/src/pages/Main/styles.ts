import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  min-height: 150px;
  padding-top: 16px;
  margin: 0 16px;
  background: #eee;
  flex: 1;
`;

export const Flatlist = styled(FlatList)``;

export const Post = styled.View`
  background: #fff;
  margin: 8px 0;
  border-radius: 10px;
`;

export const UserDetail = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin: 16px;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-width: 2px;
  border-color: #6c63ff;
  border-radius: 50px;
`;

export const Header = styled.View`
  flex: 1;
`;

export const Author = styled.Text`
  color: #6c63ff;
  font-size: 24px;
  font-family: 'RobotoSlab-Medium';
  margin: 0 16px;
`;

export const UpdateAt = styled.Text`
  color: #a5a3ac;
  font-size: 12px;
  font-family: 'RobotoSlab-Regular';
  margin-left: 16px;
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
  border-top-width: 2px;
  border-color: #eee;
  padding: 16px 0;
  margin: 0 16px;
`;

export const ButtonLike = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Liketext = styled.Text`
  min-width: 64px;
  font-size: 16px;
  font-family: 'RobotoSlab-Medium';
`;

export const Icon = styled(FeatherIcon)`
  margin: 0 8px;
`;
