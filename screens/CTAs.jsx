import { Spinner, View } from 'native-base';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { QUERY_CTAS } from '../api/queries/cta';
import ContentCard from '../components/ContentCard';
import ErrorMessage from '../components/ErrorMessage';
import Title from '../components/Title';
import client from '../sanity/client';
import { colours, theme } from '../theme/theme';

const CTAs = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [ctas, setCtas] = useState();

  // Query the articles from Sanity
  useEffect(() => {
    client.fetch(QUERY_CTAS())
      .then(res => {
        setLoading(false);
        setCtas(res);
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
        {!loading && !error && ctas && (
          <FlatList
            style={theme.sanityCardList}
            data={ctas}
            renderItem={({ item }) => {
              return (
                <ContentCard
                  navigateTo="CTA"
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

export default CTAs;
