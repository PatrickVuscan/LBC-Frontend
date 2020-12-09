/* eslint-disable quote-props */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/no-string-refs */
import React from 'react';
import { Dimensions, StyleSheet, Image } from 'react-native';
import {
  Button, Container, Text, Input, Content, Item, 
} from 'native-base';
import { colours } from '../theme/theme';

const { screenHeight, screenWidth } = Dimensions.get('window');
const lbcLogo = require('../assets/lbc_logo_w_ball_gradient.png');

const Login = props => {
  const [usernameValue, onChangeUsername] = React.useState('');
  const [passwordValue, onChangePassword] = React.useState('');

  const signUp = async () => {
    try {
      const res = await fetch(
        'http://99.237.154.88:5000/users/',
        {
          method: 'POST',
          body: JSON.stringify({ 'username': usernameValue, 'password': passwordValue }),
        },
      );

      console.log(res); //! for testing
    
      return res.status === 200;
    } catch (err) {
      return false;
    }
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
              marginBottom: 20,
              borderWidth: 2,
              borderColor: colours.purple,
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
            onSubmitEditing={() => {
              if (!props.logIn(usernameValue, passwordValue)) {
                props.createAlert('Bad Log In Attempt', 'Invalid Credentials');
              }
            }}
            returnKeyType="go"
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
            onSubmitEditing={() => {
              if (!props.logIn(usernameValue, passwordValue)) {
                props.createAlert('Bad Log In Attempt', 'Invalid Credentials');
              }
            }}
            returnKeyType="go"
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
            let signUpRes;
            signUp().then(res => { signUpRes = res; });

            if (signUpRes) {
              // Do log in stuff
              props.logIn();
            } else {
              props.createAlert('Server Response Error', 'Something went wrong on our end!');
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
    backgroundColor: colours.purple, 
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
    backgroundColor: colours.gold, // #b99dc4
    marginBottom: 15, 
    color: '#FFFFFF',
  },

  'textInputContainer': {
    width: 300, 
    borderColor: 'transparent',
  },
});

export default Login;
