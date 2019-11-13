import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Container, Name, Description, Stats, Stat, StatCount } from './styles';

export default function Repository({data}) {
  return (

    <Container>
        <Name>{data.title}</Name>
        
        <Description>{data.description}</Description>

        <Stats>
            <Stat>
                <Icon name="eye" size={16} color='#333'/>
                <StatCount>{data.views}</StatCount>
            </Stat>
            <Stat>
                <Icon name="thumbs-up" size={16} color='#333'/>
                <StatCount>{data.likes}</StatCount>
            </Stat>
        </Stats>
    </Container>
  );
}
