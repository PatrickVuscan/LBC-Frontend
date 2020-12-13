import { Spinner, View } from 'native-base';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import CategoryCard from '../components/CategoryCard';
import ErrorMessage from '../components/ErrorMessage';
import ArticleScreenHeader from '../components/ArticleScreenHeader';
import client from '../sanity/client';
import { QUERY_CATEGORIES, QUERY_RESOURCES_BY_CATEGORY } from '../sanity/reachOut';
import { colours, theme } from '../theme/theme';

const ReachOutCategories = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [categories, setCategories] = useState();

  // Query the categories from Sanity
  useEffect(() => {
    client.fetch(QUERY_CATEGORIES)
      .then(res => {
        setLoading(false);
        setCategories(res);
      })
      .catch(e => {
        setError(e);
      });
  }, []);

  return (
    <>
      {/* Header */}
      <ArticleScreenHeader text="Reach Out!" />

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

        {!loading && !error && categories && (
          <FlatList
            style={theme.sanityCardList}
            data={categories}
            renderItem={({ item }) => {
              return (
                <CategoryCard
                  navigateTo="Reach Out Resources"
                  category={item}
                  queryCategory={QUERY_RESOURCES_BY_CATEGORY}
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

export default ReachOutCategories;
