/* eslint-disable global-require */
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StoreProvider } from 'easy-peasy';
import * as Font from 'expo-font';
import { Spinner, View } from 'native-base';
import React from 'react';
import Articles from './screens/Articles';
import CTA from './screens/CTA';
import Login from './screens/Login'
import NearbyResources from './screens/NearbyResources';
import Timeline from './screens/Timeline';
import store from './state/store';

const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      loggedIn: false
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

  logIn = () => {
    this.setState({ loggedIn: true })
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
        <Login logIn={this.logIn}/>
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
