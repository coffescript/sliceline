import React, { Component } from 'react';
import { Platform, StyleSheet } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
export const Login = () => {
  return (
    <Container>
      <Form style={styles.form}>
        <Item floatingLabel>
          <Label>Username</Label>
            <Input />
        </Item>
        <Item floatingLabel>
          <Label>Password</Label>
            <Input />
        </Item>
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
    bottom: 175,
    left: 15,
    width: 310, 
    height: 300,
  }
})