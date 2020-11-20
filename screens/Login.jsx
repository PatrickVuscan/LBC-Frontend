import React from 'react';
import { Dimensions, StyleSheet, Image} from 'react-native';
import { Button, Grid, Container, Footer, FooterTab, Text, Input, Content, Item } from 'native-base'
import theme from '../theme/theme';

const {screenHeight, screenWidth} = Dimensions.get('window')
const lbcLogo = require('../assets/lbc_logo.png')

const Login = () => {
  const [usernameValue, onChangeUsername] = React.useState()
  const [passwordValue, onChangePassword] = React.useState()

  return(
    <Container style={{height: screenHeight, width: screenWidth, backgroundColor: "#a379b3"}}> 
        <Content style={{alignSelf: "center"}}>
            <Image
                style={{alignSelf: "center", marginTop: 130, height: 210, width: 200, marginBottom: 10}}
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
                    console.log(`username: ${usernameValue}, password: ${passwordValue}`)
                }}
            >
                <Text>
                    Login
                </Text>
            </Button>

            <Button 
                light
                bordered 
                style={styles.button}
                onPress={() => {
                    console.log("CHANGE TO CREATE ACCOUNT PAGE")
                }}
            >
                <Text>
                    Create Account
                </Text>
            </Button>
        </Content>  
    </Container>
  )
}

const styles = StyleSheet.create({
    "button": { 
        backgroundColor: "#e3ceeb", 
        width: 300, 
        height: 50,
        borderRadius: 5,
        marginBottom: 20,
        alignSelf: "center",
        justifyContent: "center"
    },

    "textInput": {
        //opacity: 0.2,
        borderRadius: 5,
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
