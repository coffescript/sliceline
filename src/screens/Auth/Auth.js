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
        <View style={styles.container}>
          <Image source={require('../../assets/images/logo/logoslicesline.png')} style={styles.logo} />
        
        <Button
          style={styles.connectFacebook}
          status='primary'
          size='medium'
        >
        Continue with Facebook
        </Button>

        <View style={styles.hrLeft} />
        {/*<Text style={styles.or} >OR</Text>*/}

        <View style={styles.username}>
          <Login />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,1)'
  },
  logo: {
    bottom: 120,
    width: 355, 
    height: 300,

  },
  connectFacebook: {
    flexDirection: 'column',
    bottom: 180,
    width: 300,
    left: 28,
  },
  hrLeft: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    bottom: 160,
    width: 315,
    left: 20
  },
  or: {
    
  }
})
  