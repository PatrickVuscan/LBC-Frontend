// @ts-check
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import { Spinner, View } from 'native-base';
import React from 'react';
import CTA from './screens/CTA';
import Articles from './screens/Articles';
import NearbyResources from './screens/NearbyResources';
import Timeline from './screens/Timeline';

const Tab = createBottomTabNavigator();

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
        ...Ionicons.font,
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
      <NavigationContainer>
        <Tab.Navigator
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
    );
  }
}
