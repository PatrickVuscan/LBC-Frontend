import { Spinner, View } from 'native-base';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import ContentCard from '../components/ContentCard';
import ErrorMessage from '../components/ErrorMessage';
import Title from '../components/Title';
import client from '../sanity/client';
import { QUERY_TAA, QUERY_TAAS } from '../sanity/takeAction';
import { colours, theme } from '../theme/theme';

const TakeActionArticles = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [takeActionArticles, setTakeActionArticles] = useState();

  // Query the articles from Sanity
  useEffect(() => {
    client.fetch(QUERY_TAAS())
      .then(res => {
        setLoading(false);
        setTakeActionArticles(res);
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
          <Title title="Take action in your community!" />
        </View>
      </View>

      {/* Calls To Action */}
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
        {!loading && !error && takeActionArticles && (
          <FlatList
            style={theme.sanityCardList}
            data={takeActionArticles}
            renderItem={({ item }) => {
              return (
                <ContentCard
                  navigateTo="Article"
                  content={item}
                  queryContent={QUERY_TAA}
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

export default TakeActionArticles;
