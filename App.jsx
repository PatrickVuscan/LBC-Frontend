/* eslint-disable global-require */
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Alert } from 'react-native';
import { StoreProvider } from 'easy-peasy';
import * as Font from 'expo-font';
import { Spinner, View } from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colours } from './theme/theme';
import Educate from './screens/Educate';
import ReportIt from './screens/ReportIt';
import Timeline from './screens/Timeline';
import Login from './screens/Login';
import store from './state/store';
import TakeAction from './screens/TakeAction';

const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      loggedIn: false,
      accessToken: '',
      tokenType: '',
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
          text: 'OK',
        },
      ],
      { cancelable: false },
    );
  }

  logIn = async (usernameVal, passwordVal) => {
    try {
      const res = await fetch(
        'https://lbc-backend-fxp5s3idfq-nn.a.run.app/users/login',
        {
          method: 'POST',
          body: JSON.stringify({ username: usernameVal, password: passwordVal }),
        },
      );

      if (res.status === 200) {
        const token = res.json().access_token;
        const type = res.json().token_type;
        console.log(token); //! for testing only

        this.setState({ loggedIn: true, accessToken: token, tokenType: type });
        return true;
      }
      this.createAlert('Failed Log In', 'Something went wrong on our end :( return');
    } catch {
      this.createAlert('Failed Log In', 'Something went wrong on our end :( catch');
      return false;
    }
  }

  render() {
    const { isReady } = this.state;
    const { loggedIn } = this.state;

    if (!isReady) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Spinner color={colours.purple} />
        </View>
      );
    }

    return (
      <StoreProvider store={store}>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
          {!loggedIn ? (
            <Login
              logIn={this.logIn}
              createAlert={this.createAlert}
            />
          ) : (
            <NavigationContainer>
              <Tab.Navigator
                initialRouteName="Timeline"
                tabBarOptions={{
                  activeTintColor: 'white',
                  inactiveTintColor: 'white',
                  tabStyle: {
                    justifyContent: 'center',
                  },
                  activeBackgroundColor: colours.purple,
                  inactiveBackgroundColor: 'black',
                }}
                // TODO: check
                // sceneContainerStyle={{ backgroundColor: 'black' }}
              >
                <Tab.Screen
                  name="Connect"
                  component={Timeline}
                />
                <Tab.Screen
                  name="Educate"
                  component={Educate}
                />
                <Tab.Screen
                  name="Take Action"
                  component={TakeAction}
                />
                <Tab.Screen
                  name="Report It"
                  component={ReportIt}
                />
              </Tab.Navigator>
            </NavigationContainer>
          )}
        </SafeAreaView>
      </StoreProvider>
    );
  }
}
