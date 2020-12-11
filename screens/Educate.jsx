// @ts-check
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Article from '../components/Article';
import ScreenBase from '../components/ScreenBase';
import EducateArticles from './EducateArticles';

const Stack = createStackNavigator();

const Educate = () => {
  return (
    <ScreenBase
      noHeader
    >
      <Stack.Navigator
        initialRouteName="Articles"
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
          name="Articles"
          component={EducateArticles}
        />
        <Stack.Screen
          name="Article"
          component={Article}
        />
      </Stack.Navigator>
    </ScreenBase>
  );
};

export default Educate;
