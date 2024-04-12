import React from 'react'
import { View, Text, Button, Alert } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from './router/Home';
import User from './router/User';
import Background from './router/Background';
import Calendar from './router/calendar';

const Stack = createMaterialTopTabNavigator()
const {Navigator, Screen} = Stack

const App = () => {
  return (
    <NavigationContainer>
      <Navigator
        tabBarPosition='bottom'
        screenOptions={({route}) => ({
            tabBarItemStyle: { 
              height: 50
             },
            tabBarShowIcon:true,
            tabBarAndroidRipple: { borderless: false },
            tabBarIndicatorStyle: {
              height: 0, 
            },
            tabBarShowLabel: false,
            tabBarIcon:({focused}) => {
              let iconName = 'home';
              let color = focused ? '#000' : '#999'
              if(route.name === 'Home'){
                iconName = 'home'
              }else if(route.name === 'Background'){
                iconName = 'collections'
              }else if(route.name === 'Calendar'){
                iconName = 'today'
              }else if(route.name === 'User'){
                iconName = 'dashboard'
              }
              return  <Icon name={iconName} size={20} color={ color } />
            }
        })}
      >
        <Screen name="Home"  component={Home} />
        <Screen name="Calendar"  component={Calendar} />
        <Screen name="Background"  component={Background} />
        <Screen name="User"  component={User} />
      </Navigator>

  </NavigationContainer>
  )
}

export default App;
