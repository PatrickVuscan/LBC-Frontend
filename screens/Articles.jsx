// @ts-check
import { Spinner, View } from 'native-base';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { QUERY_ARTICLES } from '../api/queries/article';
import ContentCard from '../components/ContentCard';
import ErrorMessage from '../components/ErrorMessage';
import Title from '../components/Title';
import client from '../sanity/client';
import { colours } from '../theme/theme';

const Articles = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [articles, setArticles] = useState();

  // Query the articles from Sanity
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

export default Articles;
