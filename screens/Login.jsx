/* eslint-disable quote-props */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import { Dimensions, StyleSheet, Image } from 'react-native';
import {
  Button, Container, Text, Input, Content, Item, 
} from 'native-base';

const { screenHeight, screenWidth } = Dimensions.get('window');
const lbcLogo = require('../assets/lbc_logo_w_ball_gradient.png');

const Login = props => {
  const [usernameValue, onChangeUsername] = React.useState('');
  const [passwordValue, onChangePassword] = React.useState('');

  const signUp = /* async */ () => {
    // TODO Commented out code is for future backend calls
    /* try{
        const res = await fetch(
            "http://10.0.2.2:5000/users/",
            {
                method: 'POST',
                body: JSON.stringify({"username": usernameValue, "password": passwordValue})
            }
        )
    
        return res.status == 200
    }
    catch(err){
        return false
    } */

    if (usernameValue in props.userBase) {
      return false;
    }

    props.addUser(usernameValue, passwordValue);
    props.logIn(usernameValue, passwordValue);
    return true;
  };

  return (
    // #a379b3
    <Container style={{ height: screenHeight, width: screenWidth, backgroundColor: '#000000' }}> 
      <Content style={{ alignSelf: 'center' }}>
        <Image
          style={
            { 
              alignSelf: 'center', 
              marginTop: 130, 
              height: 210, 
              width: 210, 
              marginBottom: 10,
            }
          }
          source={lbcLogo}
        />

        <Item style={styles.textInputContainer}>
          <Input
            autoCapitalize="none"
            onChangeText={text => {
              onChangeUsername(text);
            }}
            style={styles.textInput}
            placeholder="Username"
            placeholderTextColor="#FFFFFF"
          />
        </Item>

        <Item style={styles.textInputContainer}>
          <Input
            autoCapitalize="none"
            secureTextEntry
            onChangeText={text => {
              onChangePassword(text);
            }}
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor="#FFFFFF"
          />
        </Item>

        <Button 
          light
          bordered 
          style={styles.button}
          onPress={() => {
            if (!props.logIn(usernameValue, passwordValue)) {
              props.createAlert('Bad Log In Attempt', 'Invalid Credentials');
            }
          }}
        >
          <Text style={styles.buttonText}>
            Login
          </Text>
        </Button>

        <Button 
          light
          bordered 
          style={styles.button}
          onPress={() => {
            if (signUp()) {
              // Do log in stuff
              props.logIn();
            } else {
              props.createAlert('Error adding User', 'User already exists');
              // TODO commented out code is for future backend calls
              // props.createAlert("Server Response Error", "Something went wrong on our end!")
            }
          }}  
        >
          <Text style={styles.buttonText}>
            Create Account
          </Text>
        </Button>
      </Content>  
    </Container>
  );
};

const styles = StyleSheet.create({
  'button': { 
    // #e3ceeb
    backgroundColor: '#7E54C6', 
    width: 300, 
    height: 50,
    borderRadius: 10,
    marginBottom: 20,
    alignSelf: 'center',
    justifyContent: 'center',
  },

  'buttonText': {
    color: '#FFFFFF',
  },

  'textInput': {
    // opacity: 0.2,
    borderRadius: 10,
    // #b99dc4
    backgroundColor: '#fdb927', // #b99dc4
    marginBottom: 15, 
    color: '#FFFFFF',
  },

  'textInputContainer': {
    width: 300, 
    borderColor: 'transparent',
  },
});

export default Login;
