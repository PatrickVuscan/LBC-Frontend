// @ts-check
import { Spinner, View } from 'native-base';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { QUERY_ARTICLES } from '../api/queries/article';
import ContentCard from '../components/ContentCard';
import ErrorMessage from '../components/ErrorMessage';
import Title from '../components/Title';
import client from '../sanity/client';
import { colours, theme } from '../theme/theme';

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
      {/* Header */}
      <View style={theme.sanityHeaderOuter}>
        <View style={theme.sanityHeaderInner}>
          <Title title="Content curated by the LBC team!" />
        </View>
      </View>

      {/* We have to create a filter thing here, to select from different
      categories and only display articles filtered from that category */}

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

export default Articles;
