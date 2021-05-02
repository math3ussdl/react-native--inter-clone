import React from 'react';
import friends from '../../assets/friends.png';
import {
  Container,
  InviteButton,
  InviteButtonText,
  InviteImage,
  InviteLeft,
  InviteSubtitle,
  InviteTitle,
} from './styles';

export default function Invite() {
  return (
    <Container>
      <InviteLeft>
        <InviteTitle>Convide seus amigos</InviteTitle>
        <InviteSubtitle>
          Indique o Inter e chame todo mundo pra simplificar a vida!
        </InviteSubtitle>
        <InviteButton>
          <InviteButtonText>Convidar</InviteButtonText>
        </InviteButton>
      </InviteLeft>

      <InviteImage source={friends} />
    </Container>
  );
}
