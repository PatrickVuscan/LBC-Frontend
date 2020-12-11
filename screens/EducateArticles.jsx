// @ts-check
import { Spinner, View } from 'native-base';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { QUERY_ARTICLE, QUERY_ARTICLES } from '../sanity/educateArticle';
import ContentCard from '../components/ContentCard';
import DropdownMenu from '../components/DropdownMenu';
import ErrorMessage from '../components/ErrorMessage';
import Title from '../components/Title';
import client from '../sanity/client';
import { colours, theme } from '../theme/theme';

const EducateArticles = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [educateArticles, setEducateArticles] = useState();

  // TODO: add a new state for article category, and retrieve category.
  const [selectedCategory, setSelectedCategory] = useState();

  // Query the articles from Sanity
  useEffect(() => {
    client.fetch(QUERY_ARTICLES())
      .then(res => {
        setLoading(false);
        setEducateArticles(res);
      })
      .catch(e => {
        setError(e);
      });
  }, []);

  return (
    <>
      {/* Header */}
      <View style={theme.sanityHeaderOuter}>
        <View style={theme.sanityHeaderInner}>
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

        {/* Article Cards */}
        {!loading && !error && educateArticles && (
          <FlatList
            style={theme.sanityCardList}
            data={educateArticles}
            renderItem={({ item }) => {
              return (
                <ContentCard
                  navigateTo="Article"
                  content={item}
                  queryContent={QUERY_ARTICLE}
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

export default EducateArticles;
