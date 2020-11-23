/* eslint-disable global-require */
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StoreProvider } from 'easy-peasy';
import * as Font from 'expo-font';
import { Spinner, View } from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Articles from './screens/Articles';
import CTAs from './screens/CTAs';
import Resources from './screens/Resources';
import Timeline from './screens/Timeline';
import store from './state/store';

const Tab = createBottomTabNavigator();

const client = new ApolloClient({
  uri: 'https://6ujtdngl.api.sanity.io/v1/graphql/staging/default',
  cache: new InMemoryCache(),
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
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

  render() {
    const { isReady } = this.state;
    if (!isReady) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Spinner color="purple" />
        </View>
      );
    }

    return (
      <ApolloProvider client={client}>
        <StoreProvider store={store}>
          <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
            <NavigationContainer>
              <Tab.Navigator
                initialRouteName="Timeline"
                tabBarOptions={{
                  activeTintColor: 'white',
                  inactiveTintColor: '#B0AFB0',
                  tabStyle: {
                    justifyContent: 'center',
                  },
                  activeBackgroundColor: 'purple',
                  inactiveBackgroundColor: 'black',
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
                  component={CTAs}
                />
                <Tab.Screen
                  name="Resources"
                  component={Resources}
                />
              </Tab.Navigator>
            </NavigationContainer>
          </SafeAreaView>
        </StoreProvider>
      </ApolloProvider>
    );
  }
}
