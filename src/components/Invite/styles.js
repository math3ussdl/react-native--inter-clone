import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  padding: 30px;
  background: #f5f6fa;
`;

export const InviteButton = styled.TouchableOpacity`
  width: 145px;
  height: 35px;
  background: #ff7a01;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-top: 10px;
`;

export const InviteButtonText = styled.Text`
  font-family: Inter-Bold;
  font-size: 15px;
  color: #fff;
`;

export const InviteImage = styled.Image`
  width: 100px;
  height: 100px;
`;

export const InviteLeft = styled.View``;

export const InviteSubtitle = styled.Text`
  width: 250px;
  font-family: Inter-Regular;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
  margin-top: 10px;
`;

export const InviteTitle = styled.Text`
  font-family: Inter-Bold;
  font-size: 18px;
`;
