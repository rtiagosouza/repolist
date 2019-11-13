import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Keyboard } from 'react';

import { Container, Title, Input, Submit, Form, List, } from './styles.js';
import Repository from '~/components/Repository';
import { useState } from 'react';

import api from '~/services/api';
import getRealm from '~/services/realm'





export default function Main(){
 
  const [input, SetInput] = useState('');
  const[error, SetError] = useState(false);

  async function saveRepo(repository){
    const data = {
      id: repository.id,
      name: repository.name,
      fullName: repository.full_name,
      description: repository.description,
      stars: repository.stargazers_count,
      forks: repository.forks_count,
    };
    const realm = await getRealm();
    realm.write (() => {
      realm.create('Repository', data);
    });
  }

  

  async function handleAddRepository(){
    try{
      const response = await api.get(`/repos/${input}`);
      await saveRepo(response.data);
      SetError(false);
      console.tron.log(error);
      SetInput('');
      Keyboard.dismiss();
    }

    catch (err){
      SetError(true)
      console.tron.warn(err);
    }
  }

  
  return(
    <Container>
      <Title>
        Repositorios
      </Title>

      <Form>
        

        <Input 
        value={input}
        error={error}
        onChangeText={SetInput}
        
        autoCaptalize="none"
        autoCorrect={false}
        placeholder="Digite algo..."
        />
        <Submit onPress={handleAddRepository}>
          <Icon name="add" size={22} color="#FFF"/>
        </Submit>
      </Form>

      <List
      keyboardShouldPersistTaps="handled"
      data={[
        {
          id: 2427,
          title: "Testando",
          description: "(node:2748) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.",
          views: "3563465",
          likes: "234",
          
        }
      ]}
      keyExtrator = { item => String(item.id)}
      renderItem={({item}) => (
        <Repository data={item}/>
      )}
      />
    </Container>
  );
}
