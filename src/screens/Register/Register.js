import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, ViewComponent } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Input, Button } from 'react-native-elements'


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu'
  })

export class Register extends Component {
  render () {
    return (
        <View style={styles.container}>
          <View style={styles.card}>
              <View style={styles.username}>
                <Input placeholder=' Phone number, username, or email' />
              </View>
              <View style={styles.password}>
              <Input  placeholder=' Password'/>
            </View>
            <View style={styles.button}>
              <Button title='Solid Button'/>
            </View>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 121, 51, 1)'
  },
  card: {
    left: 28,
    bottom: 25,
    width: 300,
    height: 430,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 5
  },
  welcome: {
    top: 120,
    textAlign: 'center',
    fontFamily: 'Ubuntu Condensed',
    color: 'rgba(52, 47, 45, 1)'
  },
  username: {
    flexDirection: 'column',
    top: 140,
    width: 300,
    justifyContent: 'center'
  },
  password: {
    flexDirection: 'column',
    top: 160
  },
  button: {
    flexDirection: 'column',
    top: 200,
    width: 150,
    left: 70
  }
})
  