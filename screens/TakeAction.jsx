// @ts-check
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import CTA from '../components/CTA';
import ScreenBase from '../components/ScreenBase';
import CTAs from './CTAs';

const Stack = createStackNavigator();

const TakeAction = () => {
  return (
    <ScreenBase
      noHeader
    >
      <Stack.Navigator
        initialRouteName="CTAs"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 20,
          },
        }}
      >
        <Stack.Screen
          name="CTAs"
          component={CTAs}
          options={{ title: 'Take Action' }}
        />
        <Stack.Screen
          name="CTA"
          component={CTA}
          options={{ title: 'Take Action', headerBackTitle: 'Back' }}
        />
      </Stack.Navigator>
    </ScreenBase>
  );
};

export default TakeAction;
