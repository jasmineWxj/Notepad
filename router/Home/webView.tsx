import React, { useRef } from 'react'
import { View, Text, Button, Alert } from 'react-native'
import { WebView } from 'react-native-webview'

const PageView = () => {
  let webViewRef = useRef() as any;

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
      />
    </>
  )
}

export default PageView;
