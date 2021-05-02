import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #ff7a00;
  width: 100%;
  height: 180px;
  padding: 30px;
  margin-top: -15px;
`;

export const LeftSect = styled.View``;

export const Overline = styled.Text`
  font-family: Inter-Regular;
  font-size: 12px;
  color: #fff;
  opacity: 0.8;
`;

export const Currency = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const MoneyUnit = styled.Text`
  color: #eee;
`;

export const HideMoney = styled.View`
  width: 120px;
  height: 25px;
  margin: 5px 15px 5px 0;
  background: #fff;
`;

export const Balance = styled.Text`
  font-family: Inter-Bold;
  font-size: 25px;
  color: #fff;
  margin-right: 15px;
`;

export const Underline = styled.Text`
  font-family: Inter-Regular;
  font-size: 12px;
  color: #fff;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;
