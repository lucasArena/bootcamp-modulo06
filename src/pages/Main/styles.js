import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;
export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  height: 40px;
  background: #eee;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #eee;
`;
export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-content: center;
  background: #7159c1;
  padding: 0 12px;
  border-radius: 4px;
  margin-left: 10px;
  opacity: ${({ loading }) => (loading ? 0.7 : 1)};
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const User = styled.View`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background: #eee;
`;

export const Name = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  margin-top: 5px;
  color: #999;
  text-align: center;
`;

export const ProfileButton = styled(RectButton)`
  flex: 1;
  align-self: stretch;
  padding: 10px 5px;
  background: #7159c1;
  border-radius: 4px;
  margin: 10px;
`;

export const ProfileButtonText = styled.Text`
  text-align: center;
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
`;
