import React, { useRef, useState } from 'react'
import { View, Text, Alert, Image, StyleSheet, StatusBar, ScrollView, Dimensions, Animated } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import EditPage from './page/edit';
import HomePage from './page';

const Home = () => {
  return (
    <Stack.Navigator initialRouteName='HomePage' headerMode='none'>
      <Stack.Screen name="Edit" component={EditPage}   />
      <Stack.Screen name="HomePage" component={HomePage}/>
    </Stack.Navigator>
  )

}

export default Home;