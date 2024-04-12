import React from 'react'
import { View, Text, Button, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { WebView } from 'react-native-webview'

const Home = () => {
  return (
    <WebView
      source={require('./index.html')}
      style={{
        flex: 1
      }}
    />
  )
}

export default Home;
