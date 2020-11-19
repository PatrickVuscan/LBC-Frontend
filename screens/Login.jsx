import React from 'react';
import { StyleSheet, TextInput, View} from 'react-native';
import { Button, Grid, Container, Row, Text } from 'native-base'

const Login = () => {
  const [usernameValue, onChangeUsername] = React.useState()
  const [passwordValue, onChangePassword] = React.useState()

  return(
    <View>   
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, marginTop: 400, marginLeft: 100}}
            onChangeText={text => {
                onChangeUsername(text)
                console.log("username:" + text)
            }}
            value={usernameValue}
        />

        <TextInput
            style={{ height: 40, borderColor: 'blue', borderWidth: 1, width: 200, marginTop: 10, marginLeft: 100}}
            onChangeText={text => {
                onChangePassword(text)
                console.log("password:" + text)
            }}
            value={passwordValue}
        />

    <Container style={{marginLeft: 81}}>
            <Grid>
                <Row>
                    <Button style={styles.button}>
                        <Text>
                            Login
                        </Text>
                    </Button>

                    <Button style={styles.button}>
                        <Text>
                            Create Account
                        </Text>
                    </Button>
                </Row>
            </Grid>   
        </Container>

    </View>
  )
}

const styles = StyleSheet.create({
    "button": { 
        width: 100, 
        height: 50,
        margin: 10,
        color: "red"
    }
});

export default Login;
