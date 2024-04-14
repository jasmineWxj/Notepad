import React, { useRef, useState } from 'react'
import { View, Text, Alert, Image, StyleSheet, StatusBar, ScrollView, Dimensions, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { commonColor } from '../../../utils/color';
import { WebView } from 'react-native-webview'
import { Button, WhiteSpace, WingBlank } from '@ant-design/react-native'
const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;

const HomePage = (props) => {
    let webViewRef = useRef() as any;
    const [editBase, setEditBase] = useState(false)
  
    function _onH5Message(event: any) {
      var data = JSON.stringify(event.nativeEvent.data);
      const a = JSON.parse(event.nativeEvent.data)
  
      webViewRef.injectJavaScript(`receiveMessage("RN向H5发送消息");true;`)
    }
    const changess = () => {
      console.log(props.navigation.navigate('Edit'));
    }
  
    return (
        <View style={{ paddingLeft: 10, paddingRight: 10, position: 'relative' }}>
            <StatusBar
                hidden={false}
                backgroundColor={commonColor.HOME_BAR} // 背景颜色
                barStyle={'light-content'}
            />

            <View style={[styles.add, styles.FlexCenter]}>
                <TouchableWithoutFeedback style={{width: 60, height: 60}} onPress={changess} >
                    <View style={[styles.addIcon, styles.FlexCenter]}><Icon name='add' color='#fff' size={30}/></View>
                </TouchableWithoutFeedback>
            </View>

            <View style={[styles.justifyContentBetween, styles.flexDirectionRow]}>
                <View style={[styles.flexDirectionRow, styles.alignItemsCenter]}>
                    {/* <Image source={require('./???.png')} />  */}
                    <Icon name="description" color={commonColor.HOME_BOOK_ICON} size={30} />
                    <Text style={[styles.TopBookFont]}>极简记账</Text>
                </View>

                <View style={[styles.flexDirectionRow, styles.alignItemsCenter, styles.topEdit]}>
                    <Icon style={{ marginRight: 8 }} name="search" color={commonColor.HOME_SEARCH_ICON} size={30} />
                    <Text onPress={() => setEditBase(!editBase)}><Icon name="subject" color={commonColor.HOME_SEARCH_ICON} size={30} /></Text>
                    {
                        editBase && <View style={[styles.topEditModel]}>
                            <Text>浮窗</Text>
                        </View>
                    }
                </View>
            </View>

            <View style={[styles.rechnungPage]}>

            </View>

            <ScrollView style={[{ marginBottom: 190, backgroundColor: commonColor.HOME_SCROLL }, { height: windowsHeight - 240 }]}>
                <Text>123123123</Text>
            </ScrollView>
        </View>
    )
}

export default HomePage;

const styles = StyleSheet.create({
    flexDirectionRow: {
      flexDirection: 'row',
    },
  
    alignItemsCenter: {
      alignItems: 'center'
    },
  
    FlexCenter: {
      alignItems: 'center',
      justifyContent: 'center'
    },
  
    justifyContentBetween: {
      justifyContent: 'space-between'
    },
  
    positionAbsolute: {
      position: 'absolute',
    },
  
    TopBookFont: {
      fontSize: 18,
      marginLeft: 8,
      color: '#000',
      fontWeight: '700'
    },
  
    topEdit: {
      position: 'relative'
    },
  
    topEditModel: {
      position: 'absolute',
      bottom: -200,
      right: 0,
      width: 150,
      height: 200,
      backgroundColor: '#e7f5e0'
    },
  
    rechnungPage: {
      backgroundColor: '#a3b998',
      height: 150,
      borderRadius: 12,
      marginTop: 10
    },
  
    add: {
      position: 'absolute',
      left: windowsWidth / 2 - 30,
      top: windowsHeight - 150,
      width: 60,
      height: 60,
    },
    addIcon: {
      position: 'absolute',
      backgroundColor: '#666965',
      borderRadius: 100,
      zIndex: 2,
      width: 70,
      height: 70,
    },
  });
  