import React, { useRef } from 'react'
import { View, Text, Button, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { WebView } from 'react-native-webview'

const Home = () => {
  let webViewRef = useRef() as any;

  function _onH5Message(event: any) {
    var data = JSON.stringify(event.nativeEvent.data);
    const a = JSON.parse(event.nativeEvent.data)
    
    webViewRef.injectJavaScript(`receiveMessage("RN向H5发送消息");true;`)
  }


  return (
    <>
      <Text>pkpk</Text>
      <WebView
        ref={r => (webViewRef = r)}
        source={require('./index.html')}
        javaScriptEnabled={true}
        style={{
          flex: 1
        }}
        onMessage={_onH5Message}

        injectedJavaScript={'onRNMessage("RN load success!")'}
      />
    </>
  )
}

export default Home;
