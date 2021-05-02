import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 25px;
  margin-top: 30px;
  width: 100%;
  background: #fff;
`;

export const ShopContainer = styled.View`
  padding: 25px;
  width: 100%;
  border: 0.2px solid #ff7a00;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ShopTextView = styled.View``;

export const ShopTitle = styled.Text`
  width: 120px;
  font-family: Inter-Bold;
  font-size: 28px;
  margin-top: 15px;
`;

export const ShopSubtitle = styled.Text`
  width: 120px;
  color: #777779;
  font-family: Inter-Regular;
  font-size: 14px;
  margin-top: 10px;
`;

export const ShopImage = styled.Image`
  width: 120px;
  height: 120px;
`;

export const LinksLine = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
`;

export const LinkContainer = styled.View`
  width: 165px;
  height: 135px;
  padding: 20px;
  border: 0.2px solid #ff7a00;
  border-radius: 5px;
`;

export const LinkTitle = styled.Text`
  font-family: Inter-Bold;
  font-size: 14px;
  margin-top: 10px;
`;

export const LinkSubtitle = styled.Text`
  width: 120px;
  color: #777779;
  font-family: Inter-Regular;
  font-size: 10px;
  margin-top: 10px;
`;
