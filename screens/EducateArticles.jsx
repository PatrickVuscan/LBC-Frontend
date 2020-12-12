import { Spinner, View, Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import ContentCard from '../components/ContentCard';
import DropdownMenu from '../components/DropdownMenu';
import ErrorMessage from '../components/ErrorMessage';
import Title from '../components/Title';
import client from '../sanity/client';
import {
  QUERY_ARTICLE,
  QUERY_ARTICLES,
  QUERY_CATEGORIES,
  QUERY_ARTICLES_BY_CATEGORY,
} from '../sanity/educateArticle';
import { colours, theme } from '../theme/theme';

const EducateArticles = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [educateArticles, setEducateArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Query the articles from Sanity
  useEffect(() => {
    if (selectedCategory === 'all') {
      client.fetch(QUERY_ARTICLES())
        .then(res => {
          setLoading(false);
          setEducateArticles(res);
        })
        .catch(e => {
          setError(e);
        });
    } else {
      client.fetch(QUERY_ARTICLES_BY_CATEGORY(selectedCategory))
        .then(res => {
          setLoading(false);
          setEducateArticles(res);
        })
        .catch(e => {
          setError(e);
        });
    }

    client.fetch(QUERY_CATEGORIES)
      .then(res => {
        setLoading(false);
        setCategories([
          { _id: 'all', name: 'All' },
          ...res,
        ]);
      })
      .catch(e => {
        setError(e);
      });
  }, [selectedCategory]);

  return (
    <>
      {/* Header */}
      <View style={theme.sanityHeaderOuter}>
        <View style={theme.sanityHeaderInner}>
          <Title title="Content curated by the LBC team!" />
        </View>
      </View>

      {/* Category Picker and Articles */}
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

        {!loading && !error && (
          <>
            {/* Category Picker */}
            <DropdownMenu
              text="Category"
              placeholder="Select a Category"
              items={categories}
              selectedItem={selectedCategory}
              onValueChange={v => {
                return setSelectedCategory(v);
              }}
            />
            {/* Articles */}
            {educateArticles.length > 0 ? (
              <FlatList
                style={theme.sanityCardList}
                data={educateArticles}
                renderItem={({ item }) => {
                  return (
                    // Article Cards
                    <ContentCard
                      navigateTo="Article"
                      content={item}
                      queryContent={QUERY_ARTICLE}
                    />
                  );
                }}
                keyExtractor={item => { return item._id; }}
              />
            ) : (
              <View style={{ flex: 1, justifyContent: 'center', padding: '15%' }}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: colours.purple,
                    fontSize: 18,
                    fontWeight: '500',
                  }}
                >
                  Unfortunately there is nothing here yet... Check back soon!
                </Text>
              </View>
            )}
          </>
        )}
      </View>
    </>
  );
};

export default EducateArticles;
