import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import picture from '../../assets/photo.png';
import {
  Avatar,
  Balance,
  Container,
  Currency,
  LeftSect,
  MoneyUnit,
  Overline,
  Underline,
} from './styles';

export default function Header() {
  const [moneyShown, setMoneyShown] = useState(false);

  return (
    <Container>
      <LeftSect>
        <Overline>Saldo em conta</Overline>
        <Currency>
          {moneyShown ? (
            <Balance>
              <MoneyUnit>R$</MoneyUnit> 3.000,00
            </Balance>
          ) : (
            <LinearGradient
              colors={['#fff', '#ddd']}
              style={{
                width: 150,
                height: 30,
                marginTop: 5,
                marginRight: 15,
                marginBottom: 5,
                borderRadius: 5,
                opacity: 0.4,
              }}
            />
          )}

          <Icon
            onPress={() => setMoneyShown(!moneyShown)}
            name={moneyShown ? 'eye' : 'eye-off'}
            size={25}
            color="#fff"
          />
        </Currency>
        <Underline style={{ opacity: moneyShown ? 0.8 : 0 }}>
          Atualizado neste momento
        </Underline>
      </LeftSect>

      <Avatar source={picture} />
    </Container>
  );
}
