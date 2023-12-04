import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importe suas telas aqui
import  SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const Stack = createStackNavigator();

const  AuthRoutes=()=>{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">  
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown:false}} /> 
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown:false}} />  
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AuthRoutes;