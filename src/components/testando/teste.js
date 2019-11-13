
import React, {useEffect, useState} from 'react';
import {Title, Submit, TextoBotao} from '~/pages/Main/styles'
import { View } from 'react-native';

// import { Container } from './styles';

export default function Testando() {
    const incrementa = () => SetCounter(counter+1);{

    }
    const [counter, SetCounter] = useState(0);
    
  return (
      <>
      <Title>counter:{counter}</Title>
    <Submit onPress={() => SetCounter(counter+1)}>
        <TextoBotao>
            Adicionar
        </TextoBotao>
    </Submit>
    </>
  );
}
