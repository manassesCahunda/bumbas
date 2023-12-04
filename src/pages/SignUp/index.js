import React,{ useState } from 'react';

import {GestureHandlerRootView}from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';


import { Image } from 'react-native';

import logo from'../../assets/logo.png';

import { 
  Container, 
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
  Titulo,
  Custom } from './styles';

import auth from '@react-native-firebase/auth';

import Background from '../../components/Background';

const SignUp =()=>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation =useNavigation(); 

  function handleSinUp (){
    auth()
    .createUserWithEmailAndPassword(email,password)
    .then(()=>console.log("cadastrado"))
    .catch(()=>alert("Usuario já existente"))
  }

  return(
    <Background>
    <Container>
    <GestureHandlerRootView>
    <Form>
    <Image source={logo} style={{marginTop:-50,marginBottom:-30}} />
      <Titulo>BUMBA</Titulo>
      <Custom>
      <FormInput  
      icon="mail-outline"
      keyboardType="email-address"
      placeholder="Digite o seu email"
      onChangeText={setEmail}
      />
      <FormInput  
      icon="lock-outline"
      placeholder="Digite a sua senha"
      secureTextEntry
      onChangeText={setPassword}
      />
    <SubmitButton  onPress={handleSinUp} >CADASTRO</SubmitButton>
    <SignLink onPress={() => navigation.navigate('SignIn')}>
      <SignLinkText>Já possuo uma conta</SignLinkText>
    </SignLink>
    </Custom>
    </Form>
    </GestureHandlerRootView>
    </Container>
    </Background>
    
  );
}
export default  SignUp;