// @ts-check
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Body, Header } from 'native-base';
import * as React from 'react';
import { Image, View } from 'react-native';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import Content from '../components/Content';
import ScreenBase from '../components/ScreenBase';
import { colours } from '../theme/theme';
import ReachOutCategories from './ReachOutCategories';
import ReachOutResources from './ReachOutResources';
import Timeline from './Timeline';

const Drawer = createDrawerNavigator();
const lbcLogo = require('../assets/lbc_logo_w_ball_gradient.png');

// const img = <Image source={lbcLogo} />;

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

const Connect = ({ route }) => {
  return (
    <ScreenBase
      noHeader
    >
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
          initialParams={{
            myposts: false,
            accessToken: route.params.accessToken,
            tokenType: route.params.tokenType,
          }}
          component={Timeline}
        />
        <Drawer.Screen
          name="My Posts"
          initialParams={{
            myposts: true,
            accessToken: route.params.accessToken,
            tokenType: route.params.tokenType,
          }}
          component={Timeline}
        />
        <Drawer.Screen
          name="Reach Out Categories"
          component={ReachOutCategories}
          options={{
            drawerLabel: () => { return null; },
            title: null,
            drawerIcon: () => { return null; },
          }}
        />
        <Drawer.Screen
          name="Reach Out Resources"
          component={ReachOutResources}
          options={{
            drawerLabel: () => { return null; },
            title: null,
            drawerIcon: () => { return null; },
          }}
        />
        <Drawer.Screen
          name="Reach Out Article"
          component={Content}
          options={{
            drawerLabel: () => { return null; },
            title: null,
            drawerIcon: () => { return null; },
          }}
        />
      </Drawer.Navigator>
    </ScreenBase>
  );
};

export default Connect;
