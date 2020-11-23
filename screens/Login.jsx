import React from 'react';
import { Dimensions, StyleSheet, Image, Alert} from 'react-native';
import { Button, Grid, Container, Footer, FooterTab, Text, Input, Content, Item } from 'native-base'
import theme from '../theme/theme';

const {screenHeight, screenWidth} = Dimensions.get('window')
const lbcLogo = require('../assets/lbc_logo_w_ball_gradient.png')

const Login = (props) => {
  const [usernameValue, onChangeUsername] = React.useState("")
  const [passwordValue, onChangePassword] = React.useState("")

  const createBadAlert = () => {
    Alert.alert(
        "Bad Log-In Attempt",
        "Invalid Credentials",
        [
            {
                text: "OK"
            }
        ],
        {cancelable: false}
    )
  }

  return(
    <Container style={{height: screenHeight, width: screenWidth, backgroundColor: "#a379b3"}}> 
        <Content style={{alignSelf: "center"}}>
            <Image
                style={{alignSelf: "center", marginTop: 130, height: 210, width: 210, marginBottom: 10}}
                source={lbcLogo}
            />

            <Item style={styles.textInputContainer}>
                <Input
                    autoCapitalize="none"
                    onChangeText={(text) => {
                        onChangeUsername(text)
                    }}
                    style={styles.textInput}
                    placeholder="Username"
                    placeholderTextColor='#FFFFFF'
                />
            </Item>

            <Item style={styles.textInputContainer}>
                <Input
                    autoCapitalize="none"
                    secureTextEntry={true}
                    onChangeText={(text) => {
                        onChangePassword(text)
                    }}
                    style={styles.textInput}
                    placeholder="Password"
                    placeholderTextColor='#FFFFFF'
                />
            </Item>

            
            <Button 
                light
                bordered 
                style={styles.button}
                onPress={() => {
                    console.log(`username: ${usernameValue}, password: ${passwordValue}`) //! For testing only

                     //! All of this code will be replaced when backend is connected
                    if(usernameValue in props.userBase && props.userBase[usernameValue] === passwordValue){
                        console.log("Successful Login!") 
                        props.logIn()
                    }else{
                        createBadAlert()
                        console.log("Invalid Login!")
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
                    if(usernameValue in props.userBase){
                        console.log("User already exists")
                    }
                    else{
                        props.userBase[usernameValue] = passwordValue
                        console.log("User added")
                        props.logIn()
                    }
                }}  
            >
                <Text style={styles.buttonText}>
                    Create Account
                </Text>
            </Button>
        </Content>  
    </Container>
  )
}

const styles = StyleSheet.create({
    "button": { 
        //#e3ceeb
        backgroundColor: "#7E54C6", 
        width: 300, 
        height: 50,
        borderRadius: 10,
        marginBottom: 20,
        alignSelf: "center",
        justifyContent: "center"
    },

    "buttonText": {
        color: '#FFFFFF'
    },

    "textInput": {
        //opacity: 0.2,
        borderRadius: 10,
        //#b99dc4
        backgroundColor: "#b99dc4", 
        marginBottom: 15, 
        color: "#FFFFFF"
    },

    "textInputContainer": {
        width: 300, 
        borderColor: "transparent"
    }
});

export default Login;
