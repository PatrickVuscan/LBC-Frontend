import React from 'react';
import { StyleSheet, TextInput, View} from 'react-native';
import { Button, Text } from 'native-base'

const CreateAccount = () => {
    const [usernameValue, onChangeUsername] = React.useState()
    const [passwordValue, onChangePassword] = React.useState()
    const [confirmPasswordValue, onChangeConfirm] = React.useState()
  
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
              style={{ height: 40, borderColor: 'blue', borderWidth: 1, width: 200, marginTop: 1, marginLeft: 100}}
              onChangeText={text => {
                  onChangePassword(text)
                  console.log("password:" + text)
              }}
              value={passwordValue}
          />

        <TextInput
              style={{ height: 40, borderColor: 'blue', borderWidth: 1, width: 200, marginTop: 1, marginLeft: 100}}
              onChangeText={text => {
                  onChangeConfirm(text)
                  console.log("password:" + text)
              }}
              value={confirmPasswordValue}
          />
  
          <Button><Text>Click Me!</Text></Button>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
      "button": {
          
      }
  });
  
  export default CreateAccount;
  