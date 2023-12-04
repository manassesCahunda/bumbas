import React,{ useState } from 'react';

import { Image } from 'react-native';

import auth from '@react-native-firebase/auth';

import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {
  Container, 
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
  Titulo,
  Custom,
  Custons
 } from './styles';

import Background from '../../components/Background';

import { useNavigation } from '@react-navigation/native';

import logo from'../../assets/logo.png';

const SignIn = () =>{

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation= useNavigation();  
  
function handleSinIn(){
    auth()
    .signInWithEmailAndPassword(email,password)
    .then(()=>console.log('logado'))
    .catch(()=>alert('A senha ou email estão incorretos'))
  }
function  handleRecuver(){
  if(email){
  auth()
  .sendPasswordResetEmail(email)
  .then(()=> alert("Foi enviado um email de redifinição de Senha"))
  .catch(()=>console.log(Error))
  }
  else{
    alert('Preencha o campo de email')
  }
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
    <SubmitButton onPress={handleSinIn} >ENTRAR</SubmitButton>
   <Custons>
    <SignLink onPress={() => navigation.navigate('SignUp')} >
      <SignLinkText >Criar conta gratuita</SignLinkText>
    </SignLink>
    <SignLink onPress={handleRecuver}>
      <SignLinkText>Recuperar a Senha</SignLinkText>
    </SignLink>
    </Custons>
    </Custom>
    </Form>
    </GestureHandlerRootView>
    </Container>
    </Background>

  );
};
export default SignIn;