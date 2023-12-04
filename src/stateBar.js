import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/Home';
import Account from './pages/Account';
import Notification from './pages/Notification';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();



function Statebars() {
return(

<Tab.Navigator 
  screenOptions={  ({ route ,color}) => ({
    tabBarIcon: ({ focused}) => {
      let iconName ;
      size=30;
      if (route.name === 'Home') {
        iconName = focused ? 'home' : 'home';
      } 
      else if (route.name === 'Minha Conta') {
        iconName = focused ? 'person' : 'person';
      }
      if (route.name === 'Notificações') {
        iconName = focused ? 'notifications' : 'notifications';
      }
      return <Icon name={iconName} size={size} color={color}/>;
    },
    tabBarStyle: {
      marginBottom:10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      marginLeft:5,
      marginRight:5,
      borderTopLeftRadius: 10, // Altere para o valor desejado
      borderTopRightRadius: 10, // Altere para o valor desejado
      paddingBottom:10,
      paddingTop:10,
      height:60,
      backgroundColor:"#468"
    }
  })
 }
  tabBarOptions={{
    tabBarActiveTintColor: 'blue',
    tabBarInactiveTintColor: 'gray'
  }}
  
  >
  <Tab.Screen name='Minha Conta' component={Account} options={{tabBarLabel: () => null }}/>
  <Tab.Screen name='Home' component={Home} options={{ headerShown:false,tabBarLabel: () => null }}/>
  <Tab.Screen name='Notificações' component={Notification} options={{ tabBarActiveTintColor: "blue", tabBarLabel: () => null }}/>
</Tab.Navigator>

); 
}


const Statebar = () => {
  return (
    <NavigationContainer>
     <Statebars/>
    </NavigationContainer>
  );
}

export default Statebar;