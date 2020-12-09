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
import CTAs from './screens/CTAs';
import ReportIt from './screens/ReportIt';
import Timeline from './screens/Timeline';
import Login from './screens/Login';
import store from './state/store';
import DrawerNav from './components/DrawerNavigator';

const Tab = createBottomTabNavigator();
const userBase = { user: 'user' }; //! This is for frontend mock login only

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      loggedIn: false,
      // access_token: ""
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

  addUser = (username, password) => {
    userBase[username] = password;
  }

  logIn = /* async */ (username, password) => {
    // TODO Commented out code is for future backend calls
    /* try{
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
    } */

    try {
      const loggedInBool = userBase[username] === password;
      this.setState({ loggedIn: loggedInBool });
      return loggedInBool;
    } catch (err) {
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
              addUser={this.addUser}
              userBase={userBase}
            />
          ) : (
            <NavigationContainer>
              <Tab.Navigator
                // I'm using @expo/vector-icons version 10.2.1 because it's
                // the latest version that renders icons properly.
                // I looked at the latest version of all of the expo icons on
                // https://icons.expo.fyi/ but not all icons are compatible.
                // Also, google searching 10.2.1 icons doesn't work because
                // it takes me to 12.0.1 icons.
                //
                // My code comes from https://stackoverflow.com/questions/60169964/icons-dont-show-up-in-react-navigation-v5
                // I used https://reactnavigation.org/docs/tab-based-navigation/#add-badges-to-icons and
                // https://snack.expo.io/?platform=android&name=Tab%20navigation%20%7C%20React%20Navigation&dependencies=%40expo%2Fvector-icons%40*%2C%40react-native-community%2Fmasked-view%40*%2C%40react-navigation%2Fbottom-tabs%40%5E5.8.0%2C%40react-navigation%2Fdrawer%40%5E5.9.0%2C%40react-navigation%2Fmaterial-bottom-tabs%40%5E5.2.16%2C%40react-navigation%2Fmaterial-top-tabs%40%5E5.2.16%2C%40react-navigation%2Fnative%40%5E5.7.3%2C%40react-navigation%2Fstack%40%5E5.9.0%2Creact-native-paper%40%5E4.0.1%2Creact-native-reanimated%40*%2Creact-native-safe-area-context%40*%2Creact-native-gesture-handler%40*%2Creact-native-screens%40*%2Creact-native-tab-view%40%5E2.15.1&sourceUrl=https%3A%2F%2Freactnavigation.org%2Fexamples%2F5.x%2Ftab-based-navigation-badges.js
                // to render icons.
                screenOptions={({ route }) => {
                  return {
                    tabBarIcon: ({ focused, color, size }) => {
                      let iconName;
                      if (route.name === 'Connect') {
                        iconName = focused
                          ? 'md-person'
                          : 'md-person';
                      } else if (route.name === 'Educate') {
                        iconName = focused
                          ? 'ios-list-box'
                          : 'ios-list';
                      } else if (route.name === 'Take Action') {
                        iconName = focused
                          ? 'ios-information-circle'
                          : 'ios-information-circle-outline';
                      } else { // route.name === "Report It"
                        iconName = focused
                          ? 'ios-list-box'
                          : 'ios-list';
                      }

                      return (
                        <Ionicons
                          name={iconName}
                          size={size}
                          color={color}
                        />
                      );
                    },
                  };
                }}
                initialRouteName="Timeline"
                tabBarOptions={{
                  activeTintColor: colours.gold,
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
                  component={DrawerNav}
                />
                <Tab.Screen
                  name="Educate"
                  component={Educate}
                />
                <Tab.Screen
                  name="Take Action"
                  component={CTAs}
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
