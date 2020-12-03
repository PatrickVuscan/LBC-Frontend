import { Spinner, View } from 'native-base';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { QUERY_CTAS } from '../api/queries/cta';
import ContentCard from '../components/ContentCard';
import ErrorMessage from '../components/ErrorMessage';
import Title from '../components/Title';
import client from '../sanity/client';
import { colours } from '../theme/theme';

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
      <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
          <Title title="Content curated by the LBC team!" />
        </View>
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
        {!loading && !error && ctas && (
          <FlatList
            data={ctas}
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
    marginVertical: 15,
  },
  // Used for providing background color
  outerContainer: {
    backgroundColor: colours.purple,
  },
});

export default CTAs;
