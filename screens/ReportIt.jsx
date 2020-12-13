import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Content from '../components/Content';
import ScreenBase from '../components/ScreenBase';
import ReportItCategories from './ReportItCategories';
import ReportItResources from './ReportItResources';

const Stack = createStackNavigator();

const ReportIt = () => {
  return (
    <ScreenBase
      noHeader
    >
      <Stack.Navigator
        initialRouteName="Report It"
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
          name="Report It"
          component={ReportItCategories}
        />
        <Stack.Screen
          name="Report It Resources"
          component={ReportItResources}
          options={{ title: 'Resources' }}
        />
        <Stack.Screen
          name="Resource"
          component={Content}
        />
      </Stack.Navigator>
    </ScreenBase>
  );
};

export default ReportIt;
