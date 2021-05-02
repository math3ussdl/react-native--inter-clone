import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {
  Container,
  LifeStyleIcon,
  LifeStyleItem,
  LifeStyleLine,
  LifeStyleText,
  LifeStyleTitle,
} from './styles';

export default function LifeStyle() {
  return (
    <Container>
      <LifeStyleTitle>Estilo de vida</LifeStyleTitle>

      <LifeStyleLine>
        <LifeStyleItem>
          <LifeStyleIcon>
            <Icon name="home" size={25} color="#ff7a00" />
          </LifeStyleIcon>
          <LifeStyleText>Casa</LifeStyleText>
        </LifeStyleItem>

        <LifeStyleItem>
          <LifeStyleIcon>
            <Icon name="tv" size={25} color="#ff7a00" />
          </LifeStyleIcon>
          <LifeStyleText>Entretenimento</LifeStyleText>
        </LifeStyleItem>

        <LifeStyleItem>
          <LifeStyleIcon>
            <Icon name="smartphone" size={25} color="#ff7a00" />
          </LifeStyleIcon>
          <LifeStyleText>Tecnologia</LifeStyleText>
        </LifeStyleItem>
      </LifeStyleLine>

      <LifeStyleLine>
        <LifeStyleItem>
          <LifeStyleIcon>
            <Icon name="truck" size={25} color="#ff7a00" />
          </LifeStyleIcon>
          <LifeStyleText>Transporte</LifeStyleText>
        </LifeStyleItem>

        <LifeStyleItem>
          <LifeStyleIcon>
            <Icon name="dribbble" size={25} color="#ff7a00" />
          </LifeStyleIcon>
          <LifeStyleText>Esporte</LifeStyleText>
        </LifeStyleItem>

        <LifeStyleItem>
          <LifeStyleIcon>
            <Icon name="navigation" size={25} color="#ff7a00" />
          </LifeStyleIcon>
          <LifeStyleText>Viagem</LifeStyleText>
        </LifeStyleItem>
      </LifeStyleLine>

      <LifeStyleLine>
        <LifeStyleItem>
          <LifeStyleIcon>
            <Icon name="heart" size={25} color="#ff7a00" />
          </LifeStyleIcon>
          <LifeStyleText>Saúde</LifeStyleText>
        </LifeStyleItem>

        <LifeStyleItem>
          <LifeStyleIcon>
            <Icon name="sun" size={25} color="#ff7a00" />
          </LifeStyleIcon>
          <LifeStyleText>Beleza</LifeStyleText>
        </LifeStyleItem>

        <LifeStyleItem>
          <LifeStyleIcon>
            <Icon name="watch" size={25} color="#ff7a00" />
          </LifeStyleIcon>
          <LifeStyleText>Moda</LifeStyleText>
        </LifeStyleItem>
      </LifeStyleLine>
    </Container>
  );
}
