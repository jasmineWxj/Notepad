import React from 'react'
import { View, Text, Button, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { WebView } from 'react-native-webview'

const Home = () => {
  return (
    <WebView
    originWhitelist={['*']}
    scalesPageToFit={false}
    useWebKit={true}
    javaScriptEnabled={true}
    source = {{'uri':'file:///android_asset/web/index.html'}}
    />
  )
}

export default Home;
