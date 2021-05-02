import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import smartphones from '../../assets/smartphones.png';
import {
  Container,
  LinkContainer,
  LinksLine,
  LinkSubtitle,
  LinkTitle,
  ShopContainer,
  ShopImage,
  ShopSubtitle,
  ShopTextView,
  ShopTitle,
} from './styles';

export default function Links() {
  return (
    <Container>
      <ShopContainer>
        <ShopTextView>
          <ShopTitle>Inter Shop</ShopTitle>
          <ShopSubtitle>Compre e ganhe cashback</ShopSubtitle>
        </ShopTextView>

        <ShopImage source={smartphones} />
      </ShopContainer>

      <LinksLine>
        <LinkContainer>
          <Icon name="map" size={25} color="#ff7a00" />
          <LinkTitle>Inter Travel</LinkTitle>
          <LinkSubtitle>Receba cashback em passagens aéreas</LinkSubtitle>
        </LinkContainer>

        <LinkContainer>
          <Icon name="truck" size={25} color="#ff7a00" />
          <LinkTitle>Shell Box</LinkTitle>
          <LinkSubtitle>Abasteça seu veículo com cashback</LinkSubtitle>
        </LinkContainer>
      </LinksLine>

      <LinksLine>
        <LinkContainer>
          <Icon name="map-pin" size={25} color="#ff7a00" />
          <LinkTitle>Inter Pass</LinkTitle>
          <LinkSubtitle>Pague pedágios sem interrupções</LinkSubtitle>
        </LinkContainer>

        <LinkContainer>
          <Icon name="book-open" size={25} color="#ff7a00" />
          <LinkTitle>Learn In</LinkTitle>
          <LinkSubtitle>Platforma de cursos de curta duração</LinkSubtitle>
        </LinkContainer>
      </LinksLine>
    </Container>
  );
}
