import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import babi from '../../assets/babi.png';
import {
  Container,
  InfoContainer,
  InfoImage,
  InfoLeft,
  InfoTextSubtitle,
  InfoTextTitle,
  InfoTextView,
} from './styles';

export default function Infos() {
  return (
    <Container>
      <InfoContainer>
        <InfoLeft>
          <InfoImage source={babi} />
          <InfoTextView>
            <InfoTextTitle>Oi, posso ajudar?</InfoTextTitle>
            <InfoTextSubtitle>
              A Babi vai te ajudar com todo o conteúdo da nossa central.
            </InfoTextSubtitle>
          </InfoTextView>
        </InfoLeft>

        <Icon name="chevron-right" size={25} color="#ff7a00" />
      </InfoContainer>

      <InfoContainer>
        <InfoLeft>
          <Icon
            name="shield"
            size={60}
            color="#ff7a00"
            style={{ marginLeft: 10, marginRight: 5 }}
          />
          <InfoTextView>
            <InfoTextTitle>iSafe</InfoTextTitle>
            <InfoTextSubtitle>
              Token para autenticar as suas transações na Conta Digital.
            </InfoTextSubtitle>
          </InfoTextView>
        </InfoLeft>

        <Icon name="chevron-right" size={25} color="#ff7a00" />
      </InfoContainer>
    </Container>
  );
}
