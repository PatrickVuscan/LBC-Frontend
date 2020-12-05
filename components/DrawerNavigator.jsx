import * as React from 'react';
import {
  Container,
  Header, Body,
} from 'native-base';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerNavigator } from 'react-navigation';
import { View, Image } from 'react-native';
import Timeline from '../screens/Timeline';
import { colours } from '../theme/theme';
import MyPosts from './MyPosts';

const Drawer = createDrawerNavigator();
const lbcLogo = require('../assets/lbc_logo_w_ball_gradient.png');

const img = <Image source={lbcLogo} />;

/*
//still attempting to implement images into the drawer navigator with no success so far
const CustomDrawerNavComponent = props => {
  <View>
    <Header>
      <Body>
        <Image source={lbcLogo} />
      </Body>
    </Header>
  </View>;
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
      >
        <Drawer.Screen
          name="Timeline"
          component={Timeline}
        />
        <Drawer.Screen
          name="My Posts"
          component={MyPosts}
        />
      </Drawer.Navigator>
    </Container>
  );
}
