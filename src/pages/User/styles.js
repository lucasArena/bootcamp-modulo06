import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 10px;
  background: #fff;
`;

export const Header = styled.View`
  align-items: center;
  padding: 20px;
`;

export const Avatar = styled.Image`
  width: 84px;
  height: 84px;
  background: #eee;
  border-radius: 42px;
`;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  text-align: center;
  color: #666;
  font-size: 14px;
  padding: 10px;
`;

export const Stars = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Starred = styled.View`
  background: #f5f5f5;
  margin-bottom: 10px;
  padding: 10px 15px;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
`;

export const OwnerAvatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
`;

export const Info = styled.View`
  margin-left: 10px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-weight: bold;
  font-size: 16px;
`;

export const Author = styled.Text`
  color: #666;
  font-size: 13px;
  margin-top: 10px;
`;
