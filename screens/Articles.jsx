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
import { colours, theme } from '../theme/theme';

const Articles = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [articles, setArticles] = useState();
  // TODO: add a new state for article category, and retrieve category.
  const [selectedCategory, setSelectedCategory] = useState();

  // const [category, setCategory] = useState();

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

  console.log(articles);

  return (
    <>
      {/* Header */}
      <View style={theme.sanityHeaderOuter}>
        <View style={theme.sanityHeaderInner}>
          <Title title="Content curated by the LBC team!" />
        </View>
      </View>

      {/* We have to create a filter thing here, to select from different
      categories and only display articles filtered from that category
      Mental Health
      Work
      School

      Use a picker, selector, etc whatever you want (but it has to be pretty!)

      valuesToDisplay={
      [
        {
          name: "All",
          id: 'all-id'
        },
        ... all the rest that are returned from the database, in our case until we're starting
        to do this dynamicall, add in a few more options of your picking
        {
          name: "Mental Health",
          id: '2340732895'
        }
      ]
      }

      value={articles}
      onSelect={(v) => {
        if (category="all"){
          setCategory(null);
        }
        else {
          setCategory(v.id) <- make sure its the correct one
        }
      }}

      */}
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
            style={theme.sanityCardList}
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
