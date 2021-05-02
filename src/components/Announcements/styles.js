import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: { marginTop: 25, paddingRight: 25 },
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const Announcement = styled.View`
  background: #fff;
  width: ${Dimensions.get('screen').width - 80}px;
  height: 200px;
  border-radius: 10px;
  margin-left: 20px;
`;

export const Body = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CardImage = styled.Image`
  width: 150px;
  height: 50px;
`;

export const CardText = styled.Text`
  flex: 1;
  margin-right: 5px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 15px;
`;

export const Title = styled.Text`
  font-family: Inter-Bold;
`;
