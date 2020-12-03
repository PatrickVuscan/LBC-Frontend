// @ts-check
import { createStackNavigator } from '@react-navigation/stack';
import {
  Button, Spinner, Text, View,
} from 'native-base';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { QUERY_ARTICLES } from '../api/queries/article';
import Article from '../components/Article';
import ContentCard from '../components/ContentCard';
import ErrorMessage from '../components/ErrorMessage';
import ScreenBase from '../components/ScreenBase';
import Subtitle from '../components/Subtitle';
import Title from '../components/Title';
import client from '../sanity/client';
import { colours } from '../theme/theme';

const Stack = createStackNavigator();

const Educate = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [articles, setArticles] = useState();

  useEffect(() => {
    client.fetch(QUERY_ARTICLES())
      .then(res => {
        setLoading(false);
        setArticles(res);
      })
      .catch(e => {
        setError(e);
      });
  }, []);

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
          component={p => {
            return (
              <>
                <View style={styles.outerContainer}>
                  <View style={styles.innerContainer}>
                    <Title title="Check out all our articles for you!" />
                  </View>
                </View>
                <View
                  style={{
                    alignItems: 'center', justifyContent: 'center', flex: 1,
                  }}
                >

                  {loading && (
                    <Spinner color={colours.purple} />
                  )}
                  {error && (
                    <ErrorMessage error={error} />
                  )}
                  {/* Has to be a cardlist here */}
                  {!loading && !error && articles && (
                    <FlatList
                      data={articles}
                      renderItem={({ item }) => {
                        return (
                          <ContentCard
                            navigateTo="Article"
                            content={item}
                          />
                        );
                      }}
                      keyExtractor={item => { return item._id; }}
                    />
                  )}
                </View>
              </>
            );
          }}
        />
        <Stack.Screen
          name="Article"
          component={Article}
        />
      </Stack.Navigator>
    </ScreenBase>
  );
};

const styles = StyleSheet.create({
  //
  innerContainer: {
    marginHorizontal: 25,
    marginVertical: 25,
  },
  // Used for providing background color
  outerContainer: {
    margin: -10,
    backgroundColor: colours.purple,
  },
});

export default Educate;
