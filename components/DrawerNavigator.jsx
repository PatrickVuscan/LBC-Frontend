import * as React from 'react';
import {
  Container,
  Header, Body,
} from 'native-base';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerNavigator, DrawerNavigatorItems } from 'react-navigation-drawer';
import { View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Timeline from '../screens/Timeline';
import { colours } from '../theme/theme';
import MyPosts from './MyPosts';

const Drawer = createDrawerNavigator();
const lbcLogo = require('../assets/lbc_logo_w_ball_gradient.png');

const img = <Image source={lbcLogo} />;

// still attempting to implement images into the drawer navigator with no success so far
const CustomDrawerNavComponent = props => {
  <View>
    <Header>
      <Body>
        <Image source={lbcLogo} />
      </Body>
    </Header>
    <DrawerNavigatorItems {...props} />
  </View>;
};

const Stack = createStackNavigator();

/*
const DrawerNav = () => {
  return (

    <Stack.Navigator
      initialRouteName="Timeline"
      screenOptions={{ headerLeft: () => { return <Image source={lbcLogo} />; } }}
    >
      <Stack.Screen
        name="Timeline"
        component={Timeline}
      />
    </Stack.Navigator>

  );
};
*/

export default function DrawerNav() {
  return (
    <Container>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: colours.purple,
          itemStyle: { marginVertical: 5 },
        }}
        initialRouteName="Timeline"
        contentComponent={CustomDrawerNavComponent}
      >
        <Drawer.Screen
          name="Timeline"
          initialParams={{ myposts: false }}
          component={Timeline}
        />
        <Drawer.Screen
          name="My Posts"
          initialParams={{ myposts: true }}
          component={Timeline}
        />
      </Drawer.Navigator>
    </Container>
  );
}

// export default DrawerNav;
