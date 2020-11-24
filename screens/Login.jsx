import React from 'react';
import { Dimensions, StyleSheet, Image, Alert} from 'react-native';
import { Button, Grid, Container, Footer, FooterTab, Text, Input, Content, Item } from 'native-base'
import theme from '../theme/theme';

const {screenHeight, screenWidth} = Dimensions.get('window')
const lbcLogo = require('../assets/lbc_logo_w_ball_gradient.png')

const Login = (props) => {
  const [usernameValue, onChangeUsername] = React.useState("")
  const [passwordValue, onChangePassword] = React.useState("")

  const signUp = async () => {
    /*try{
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
    }*/
    userBase[usernameValue] = passwordValue
    props.logIn(usernameValue, passwordValue)
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
                    if(!props.logIn(usernameValue, passwordValue)){
                        props.createAlert("Bad Log In Attempt", "Invalid Credentials")
                    }
                    /*console.log(`username: ${usernameValue}, password: ${passwordValue}`) //! For testing only

                     //! All of this code will be replaced when backend is connected
                    if(usernameValue in props.userBase && props.userBase[usernameValue] === passwordValue){
                        console.log("Successful Login!") 
                        props.logIn()
                    }else{
                        createAlert("Bad Log In Attempt", "Invalid Credentials")
                        console.log("Invalid Login!")
                    }*/
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
                    if(signUp()){
                        //Do log in stuff
                        props.logIn()
                    }
                    else{
                        createAlert("Server Response Error", "Something went wrong on our end!")
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
