import React, { Component } from 'react'
import { Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ViewComponent } from 'react-native'

// UI Kitten
import {
  Button,
  ButtonProps,
} from 'react-native-ui-kitten'


// Components
import { Login } from '../../components/Auth/Login'


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu'
  })


export class Auth extends Component {
  render () {
    return (
      <React.Fragment>
        <View style={styles.container}>
          <Image source={require('../../assets/images/logo/logoslicesline.png')} style={styles.logo} />
        </View>
        <View style={styles.login}>
          <Login />
        </View> 
      </React.Fragment>
     
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'rgba(255,255,255,1)'
  },
  logo: {
    top: 40,
    width: 355, 
    height: 300
  },
  login: {
    flex: 2
  }
})
  