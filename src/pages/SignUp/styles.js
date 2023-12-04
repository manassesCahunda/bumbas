

import styled from 'styled-components/native';

import Input from '../../components/input';

import Button from '../../components/button';

export const Container = styled.KeyboardAvoidingView`
  flex:1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch;
  width: 80%;
  align-items: center;
`;

export const FormInput = styled(Input)`
  margin-bottom: 30px;
`;
export const SubmitButton = styled(Button)`
  width: 279px;
  height: 45px;
`;
export const SignLink = styled.TouchableOpacity`
  margin-bottom: 20px;
`;
export const SignLinkText  = styled.Text`
  color:#FFF;
  font-size: 16px;
  padding-top: 30px;
  margin-left: 65px;
`;
export const Titulo = styled.Text`
color: #C377;
font-size: 26px;
padding-bottom: 30px;
padding-top: 5px;
font-weight: bold;
`;

export const Custom = styled.View`
    background: rgba(255,255,255,0.1);
    padding-top: 30px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 10px;
`;

