// @ts-check
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Content from '../components/Content';
import ScreenBase from '../components/ScreenBase';
import EducateArticles from './EducateArticles';

const Stack = createStackNavigator();

const Educate = () => {
  return (
    <ScreenBase
      noHeader
    >
      <Stack.Navigator
        initialRouteName="Educate"
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
          name="Educate"
          component={EducateArticles}
        />
        <Stack.Screen
          name="Article"
          component={Content}
        />
      </Stack.Navigator>
    </ScreenBase>
  );
};

export default Educate;
