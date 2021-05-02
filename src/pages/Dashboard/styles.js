import styled from 'styled-components/native';
export const Container = styled.ScrollView.attrs({
  contentContainerStyle: { alignItems: 'center' },
})``;

export const CardContainer = styled.View`
  margin-top: -30px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CardLine = styled.View`
  margin-top: 5px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CardItem = styled.View`
  margin: 0 5px;
  background: #fff;
  width: 110px;
  height: 100px;
  border-radius: 10px;

  align-items: center;
  justify-content: center;
`;

export const CardIcon = styled.View`
  background-color: rgba(255, 122, 0, 0.2);
  width: 35px;
  height: 35px;
  border-radius: 27px;

  align-items: center;
  justify-content: center;

  margin-bottom: 8px;
`;

export const CardText = styled.Text``;
