import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Announcements from '../../components/Announcements';
import Header from '../../components/Header';
import Infos from '../../components/Infos';
import Invite from '../../components/Invite';
import LifeStyle from '../../components/LifeStyle';
import Links from '../../components/Links';
import {
  CardContainer,
  CardIcon,
  CardItem,
  CardLine,
  CardText,
  Container,
} from './styles';

export default function Dashboard() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Container>
      <Header />

      <CardContainer>
        <CardItem>
          <CardIcon>
            <Icon name="dollar-sign" size={20} color="#ff7a00" />
          </CardIcon>
          <CardText>Transferência</CardText>
        </CardItem>

        <CardItem>
          <CardIcon>
            <Icon name="credit-card" size={20} color="#ff7a00" />
          </CardIcon>
          <CardText>Cartão</CardText>
        </CardItem>

        <CardItem>
          <CardIcon>
            <Icon name="activity" size={20} color="#ff7a00" />
          </CardIcon>
          <CardText>Investimentos</CardText>
        </CardItem>
      </CardContainer>

      {expanded && (
        <>
          <CardLine>
            <CardItem>
              <CardIcon>
                <Icon name="gift" size={20} color="#ff7a00" />
              </CardIcon>
              <CardText>Gift Card</CardText>
            </CardItem>

            <CardItem>
              <CardIcon>
                <Icon name="smartphone" size={20} color="#ff7a00" />
              </CardIcon>
              <CardText>Recarga</CardText>
            </CardItem>

            <CardItem>
              <CardIcon>
                <Icon name="home" size={20} color="#ff7a00" />
              </CardIcon>
              <CardText>Financ. Imobiliário</CardText>
            </CardItem>
          </CardLine>

          <CardLine>
            <CardItem>
              <CardIcon>
                <Icon name="key" size={20} color="#ff7a00" />
              </CardIcon>
              <CardText>Consórcio</CardText>
            </CardItem>

            <CardItem>
              <CardIcon>
                <Icon name="grid" size={20} color="#ff7a00" />
              </CardIcon>
              <CardText>Interpag</CardText>
            </CardItem>

            <CardItem>
              <CardIcon>
                <Icon name="package" size={20} color="#ff7a00" />
              </CardIcon>
              <CardText>Serviços de entrega</CardText>
            </CardItem>
          </CardLine>

          <CardLine>
            <CardItem>
              <CardIcon>
                <Icon name="calendar" size={20} color="#ff7a00" />
              </CardIcon>
              <CardText>Agendamentos</CardText>
            </CardItem>

            <CardItem>
              <CardIcon>
                <Icon name="umbrella" size={20} color="#ff7a00" />
              </CardIcon>
              <CardText>Seguros</CardText>
            </CardItem>

            <CardItem>
              <CardIcon>
                <Icon name="lock" size={20} color="#ff7a00" />
              </CardIcon>
              <CardText>Bloquear conta</CardText>
            </CardItem>
          </CardLine>
        </>
      )}

      <Icon
        onPress={() => setExpanded(!expanded)}
        name={expanded ? 'chevron-up' : 'chevron-down'}
        size={35}
        color="#ff7a00"
      />

      <Announcements />

      <Links />

      <LifeStyle />

      <Infos />

      <Invite />
    </Container>
  );
}
