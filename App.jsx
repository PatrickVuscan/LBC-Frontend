/* eslint-disable global-require */
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StoreProvider } from 'easy-peasy';
import * as Font from 'expo-font';
import { Spinner, View } from 'native-base';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LogBox } from 'react-native';
import Connect from './screens/Connect';
import Educate from './screens/Educate';
import Login from './screens/Login';
import ReportIt from './screens/ReportIt';
import TakeAction from './screens/TakeAction';
import store from './state/store';
import { colours } from './theme/theme';
import createAlert from './utils/createAlert';

// Ignoring certain errors... for now at least
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const Tab = createBottomTabNavigator();

const App = () => {
  const [isReady, setIsReady] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [tokenType, setTokenType] = useState('');
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    const loadFonts = async () => {
      try {
      // Import needed fonts for NativeBase, and once imported, signal
      // the app that it is ready to start displaying
        await Font.loadAsync({
          Roboto: require('native-base/Fonts/Roboto.ttf'),
          Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
          ...Ionicons.font,
          ...MaterialIcons.font,
          ...MaterialCommunityIcons.font,
        });
      } catch (error) {
        console.log(error);
      } finally {
      // Setting the state to true when font is loaded.
        setIsReady(true);
      }
    };

    loadFonts();
  }, []);

  /*
    Makes call to backend for log in with given credentials,
    and sets relevant state variables if successful; otherwise
    creates dialog explaining error.
  */
  const logIn = async (usernameVal, passwordVal) => {
    try {
      const res = await fetch(
        'https://lbc-backend-fxp5s3idfq-nn.a.run.app/users/login',
        {
          method: 'POST',
          body: JSON.stringify({ username: usernameVal, password: passwordVal }),
        },
      );
      const data = await res.json();

      if (res.status === 200) {
        setLoggedIn(true);
        setAccessToken(data.access_token);
        setTokenType(data.token_type);
      } else {
        createAlert('Failed Log In', 'Incorrect username or password');
      }
    } catch {
      createAlert('Failed Log In', 'Something went wrong on our end :(');
    }
  };

  // Sets credential state variables to default value
  const logOut = () => {
    setLoggedIn(false);
    setTokenType('');
    setAccessToken('');
  };

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
            logIn={logIn}
            createAlert={createAlert}
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
                        ? 'book'
                        : 'book-outline';
                      // 'school', 'school-outline'
                    } else if (route.name === 'Take Action') {
                      iconName = focused
                        ? 'megaphone'
                        : 'megaphone-outline';
                      // 'earth-sharp', 'earth-outline';
                      // "bulb-sharp", "bulb-outline"
                      // 'rocket', 'rocket-outline'
                      // 'ios-earth', 'ios-earth-outline'
                    } else { // route.name === "Report It"
                      iconName = focused
                        ? 'flag-sharp' : 'flag-outline';
                      // 'shield-sharp', 'shield-outline'
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
              initialRouteName="Connect"
              tabBarOptions={{
                activeTintColor: colours.gold,
                inactiveTintColor: 'white',
                tabStyle: {
                  justifyContent: 'center',
                },
                activeBackgroundColor: 'black',
                inactiveBackgroundColor: 'black',
              }}
            >
              <Tab.Screen
                name="Connect"
                component={Connect}
                initialParams={{
                  accessToken,
                  tokenType,
                  logOut,
                }}
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
};

export default App;
