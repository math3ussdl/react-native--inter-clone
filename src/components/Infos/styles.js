import styled from 'styled-components/native';

export const Container = styled.View`
  border-top-color: #ccc;
  border-top-width: 0.2px;
  width: 100%;
  background: #fff;
  padding: 25px;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 0.2px solid #ff7a00;
  border-radius: 5px;
  height: 100px;
  padding-right: 10px;

  margin-top: 15px;
`;

export const InfoImage = styled.Image`
  width: 80px;
  height: 100px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const InfoLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const InfoTextSubtitle = styled.Text`
  font-family: Inter-Regular;
  font-size: 12px;
  color: #828284;
  width: 180px;
`;

export const InfoTextTitle = styled.Text`
  font-family: Inter-Bold;
  font-size: 16px;
`;

export const InfoTextView = styled.View`
  margin-left: 15px;
`;
