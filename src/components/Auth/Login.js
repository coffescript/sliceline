import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base'

// UI Kitten
import {
  Button,
  ButtonProps,
} from 'react-native-ui-kitten'

export const Login = () => {
  return (
    <Container>
      <Form style={styles.form}>
        <Item floatingLabel>
          <Label>Phone number, username or email</Label>
            <Input />
        </Item>
        <Item floatingLabel>
          <Label>Password</Label>
            <Input />
        </Item>
          <Button
            status='primary'
            size='small'
            style={styles.buttonLogin}
            >
            Login
          </Button>
        <View style={styles.hrLeft} />
          <Button
            size='small'
            style={styles.connectFacebook}
            >
            Log in with Facebook
          </Button>
          <Button
          size='small'
          style={styles.connectGoogle}
          >
          Log in with Google
        </Button>

        <Text style={styles.forgotpassword}>Forgot Password?</Text>
      </Form>
    </Container>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: 35,
    left: 100
  },
  form: {
   // bottom: 235,
    left: 15,
    width: 310, 
    height: 300,
  },
  hrLeft: {
    borderBottomColor: 'rgb(169,169,169)',
    borderBottomWidth: 0.2,
    top: 40,
    width: 315,
     left: 4,
     backgroundColor: 'rgb(169,169,169)'
  },
  or: {
    
  },
  buttonLogin: {
    top: 20,
    left: 6,
    backgroundColor: 'rgba(59, 89, 152,1)',
     borderColor: 'rgba(59, 89, 152,1)'
  },
  connectFacebook: {
    flexDirection: 'row',
    top: 55,
    width: 311,
    left: 5,
    backgroundColor: 'rgba(59, 89, 152,1)',
    borderColor: 'rgba(59, 89, 152,1)'
     // color: '#3b5998'
  },
  connectGoogle: {
    flexDirection: 'row',
    top: 70,
    width: 311,
    left: 5,
    backgroundColor: 'rgba(221, 75, 57, 1)',
    borderColor: 'rgba(221, 75, 57, 1)'
     // color: '#3b5998'
  },
  forgotpassword: {
     color: 'rgba(59, 89, 152,1)',
     top: 120,
     left: 115
  }
})