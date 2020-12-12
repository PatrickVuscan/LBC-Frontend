import { Spinner, View, Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import ContentCard from '../components/ContentCard';
import DropdownMenu from '../components/DropdownMenu';
import ErrorMessage from '../components/ErrorMessage';
import Title from '../components/Title';
import client from '../sanity/client';
import {
  QUERY_TAA,
  QUERY_TAAS,
  QUERY_TAAS_BY_CATEGORY,
  QUERY_CATEGORIES,
} from '../sanity/takeAction';
import { colours, theme } from '../theme/theme';

const TakeActionArticles = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [takeActionArticles, setTakeActionArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Query the articles from Sanity
  useEffect(() => {
    if (selectedCategory === 'all') {
      client.fetch(QUERY_TAAS())
        .then(res => {
          setLoading(false);
          setTakeActionArticles(res);
        })
        .catch(e => {
          setError(e);
        });
    } else {
      client.fetch(QUERY_TAAS_BY_CATEGORY(selectedCategory))
        .then(res => {
          setLoading(false);
          setTakeActionArticles(res);
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
          <Title title="Take action in your community!" />
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
            {takeActionArticles.length > 0 ? (
              <FlatList
                style={theme.sanityCardList}
                data={takeActionArticles}
                renderItem={({ item }) => {
                  return (
                    // Article Cards
                    <ContentCard
                      navigateTo="Article"
                      content={item}
                      queryContent={QUERY_TAA}
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

export default TakeActionArticles;
