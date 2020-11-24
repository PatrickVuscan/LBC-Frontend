/* eslint-disable global-require */
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Alert } from 'react-native';
import { StoreProvider } from 'easy-peasy';
import * as Font from 'expo-font';
import { Spinner, View} from 'native-base';
import React from 'react';
import Articles from './screens/Articles';
import CTA from './screens/CTA';
import Login from './screens/Login'
import NearbyResources from './screens/NearbyResources';
import Timeline from './screens/Timeline';
import store from './state/store';

const Tab = createBottomTabNavigator();
const userBase = {"user": "user"} //! This is for frontend mock login only

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      loggedIn: false,
      access_token: ""
    };
  }

  async componentDidMount() {
    try {
      // Import needed fonts for NativeBase, and once imported, signal
      // the app that it is ready to start displaying
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
        ...MaterialIcons.font,
      });
    } catch (error) {
      console.log(error);
    }
    // Setting the state to true when font is loaded.
    this.setState({ isReady: true });
  }

  createAlert = (title, msg) => {
    Alert.alert(
        title,
        msg,
        [
            {
                text: "OK"
            }
        ],
        {cancelable: false}
    )
  }

  addUser = (username, password) => {
    userBase[username] = password
  }

  logIn = /*async*/ (username, password) => {
    //TODO Commented out code is for future backend calls
    /*try{
      const res = await fetch(
        "http://10.0.2.2:5000/users/login",
        {
          method: "POST",
          body: JSON.stringify({"username": username, "password": password})
        }
      )
      
      if(res.status == 200){
        token = JSON.parse(res.json())["access_token"] 
        console.log(token) //!for testing only
        
        this.setState({ loggedIn: true, access_token: token})
      }
      else{
        this.createAlert("Failed Log In", "Something went wrong on our end :(")
      }
    }
    catch{
      this.createAlert("Failed Log In", "Something went wrong on our end :(")
    }*/

    try{
      const loggedIn = userBase[username] === password
      this.setState({ loggedIn: loggedIn })
      return loggedIn
    }
    catch(err){
      return false
    }
  }

  render() {
    const { isReady } = this.state;
    const { loggedIn } = this.state;

    if (!isReady) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Spinner color="purple" />
        </View>
      );
    }

    if(!loggedIn){
      return (
        <Login logIn={this.logIn} createAlert={this.createAlert} addUser={this.addUser} userBase={userBase}/>
      );
    }
    else{
      return (
        <StoreProvider store={store}>
          <NavigationContainer>
            <Tab.Navigator
              initialRouteName="Timeline"
              tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
                tabStyle: {
                  justifyContent: 'center',
                },
              }}
            >
              <Tab.Screen
                name="Timeline"
                component={Timeline}
              />
              <Tab.Screen
                name="Articles"
                component={Articles}
              />
              <Tab.Screen
                name="CTA"
                component={CTA}
              />
              <Tab.Screen
                name="Resources"
                component={NearbyResources}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </StoreProvider>
      );
    }
  }
}
