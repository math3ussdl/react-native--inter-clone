import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import pig from '../../assets/InterPig.png';
import {
  Announcement,
  Body,
  CardImage,
  CardText,
  Container,
  Header,
  Title,
} from './styles';

export default function Announcements() {
  return (
    <Container>
      <Announcement>
        <Header>
          <Title>Extrato de cashback</Title>
          <Icon name="eye-off" size={25} color="#ff7a00" />
        </Header>

        <Body>
          <CardImage source={pig} />
          <CardText>
            Faça economias com a gente! Vem pro Extrato de cashback Inter!
          </CardText>
        </Body>
      </Announcement>

      <Announcement>
        <Header>
          <Title>Extrato</Title>
          <Icon name="eye-off" size={25} color="#ff7a00" />
        </Header>

        <Body>
          <CardImage source={pig} />
          <CardText>Veja todas as suas atividades no Inter!</CardText>
        </Body>
      </Announcement>

      <Announcement>
        <Header>
          <Title>Investimento</Title>
          <Icon name="eye-off" size={25} color="#ff7a00" />
        </Header>

        <Body>
          <CardImage source={pig} />
          <CardText>
            Gerencie todos os seus investimentos de forma fácil e rápida!
          </CardText>
        </Body>
      </Announcement>
    </Container>
  );
}
