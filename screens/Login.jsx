import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

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
            style={{ height: 100, borderColor: 'blue', borderWidth: 1, width: 200, marginTop: 500, marginLeft: 100}}
            onChangeText={text => {
                onChangePassword(text)
                console.log("password:" + text)
            }}
            value={passwordValue}
        />
    </View>
  )
}

const styles = StyleSheet.create({});

export default Login;
