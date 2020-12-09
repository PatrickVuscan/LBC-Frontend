// @ts-check
import { Spinner, View } from 'native-base';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Chevron } from 'react-native-shapes';
import { QUERY_ARTICLES } from '../api/queries/article';
import ContentCard from '../components/ContentCard';
import DropdownMenu from '../components/DropdownMenu';
import ErrorMessage from '../components/ErrorMessage';
import Title from '../components/Title';
import client from '../sanity/client';
import { colours } from '../theme/theme';

const Articles = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [articles, setArticles] = useState();
  // TODO: add a new state for article category, and retrieve category.
  const [selectedCategory, setSelectedCategory] = useState();

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
      {/* Header */}
      <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
          <Title title="Content curated by the LBC team!" />
        </View>
      </View>

      {/* A dropdown menu to filter articles by category. */}
      <View style={styles.innerContainer}>
        <DropdownMenu
          header="Filter Articles by Category"
          placeholder={{
            label: 'Select an article category...',
            value: null,
          }}
          items={[
            { label: 'Mental Health', value: 'mental health' },
            { label: 'Social Justice', value: 'social justice' },
            { label: 'Education', value: 'education' },
          ]}
          value={selectedCategory}
          icon={() => {
            return (
              // <Ionicons
              //   name="md-arrow-down"
              //   size={30}
              //   color="gray"
              // />
              <Chevron
                size={1.5}
                color="gray"
              />
            );
          }}
          onValueChange={value => { setSelectedCategory(value); }}
        />
      </View>

      {/* Articles */}
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
            style={styles.flatlist}
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
  innerContainer: {
    marginHorizontal: 25,
    marginVertical: 15,
  },
  outerContainer: {
    backgroundColor: colours.purple,
  },
  flatlist: {
    marginBottom: 15,
  },
});

export default Articles;
