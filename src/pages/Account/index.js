import React, { useState, useEffect} from 'react';
import { View, Text,TouchableHighlight} from 'react-native';

import auth from '@react-native-firebase/auth';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Icons,
  Container,
  Close,
  Titulo ,
  ContainerStyle
} from './styles';

function  Account() {
   function close(){
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
    }    
  // Defina um estado de inicialização enquanto o Firebase se conecta
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Lide com as mudanças de estado do usuário
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // cancele a inscrição ao desmontar
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <View>
        <Text>Bloqueado</Text>
      </View>
    );
  }

  return (
    <View>
     <Icons name="person" size={100}/>
     <Titulo>{user.email}</Titulo>
     <ContainerStyle>
     <Text style={{marginTop:30}}>
     Por que é que te perdes.
      Se tens em tua posse o aplicativo do bumba 
      Bora Bumbar!</Text>
    </ContainerStyle>
     <ContainerStyle>
    <Container >
     <Icon name="close" size={40} color={"#FFF"}/>
     <TouchableHighlight onPress={close} >
      <Text>clicar aqui</Text>
     </TouchableHighlight>
      </Container>
     </ContainerStyle>
    </View>
  );
}

export default Account;