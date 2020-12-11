// @ts-check
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Content from '../components/Content';
import ScreenBase from '../components/ScreenBase';
import TakeActionArticles from './TakeActionArticles';

const Stack = createStackNavigator();

const TakeAction = () => {
  return (
    <ScreenBase
      noHeader
    >
      <Stack.Navigator
        initialRouteName="Take Action"
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
          name="Take Action"
          component={TakeActionArticles}
          options={{ title: 'Take Action' }}
        />
        <Stack.Screen
          name="Article"
          component={Content}
          options={{ title: 'Article' }}
        />
      </Stack.Navigator>
    </ScreenBase>
  );
};

export default TakeAction;
