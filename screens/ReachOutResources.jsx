import { Spinner, View } from 'native-base';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import ArticleScreenHeader from '../components/ArticleScreenHeader';
import ContentCard from '../components/ContentCard';
import ErrorMessage from '../components/ErrorMessage';
import TextSpanner from '../components/TextSpanner';
import client from '../sanity/client';
import { QUERY_RESOURCE } from '../sanity/reportIt';
import { colours, theme } from '../theme/theme';

const ReachOutResources = ({ route, navigation }) => {
  const { categoryID, categoryName, queryCategory } = route.params;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [resources, setResources] = useState([]);

  useEffect(() => {
    // Set the header title for this category!
    navigation.setOptions({ title: categoryName });

    // Query the resources from Sanity, dependent on the category chosen
    client.fetch(queryCategory(categoryID))
      .then(res => {
        setLoading(false);
        setResources(res);
      })
      .catch(e => {
        setError(e);
      });
  }, [categoryName, categoryID]);

  return (
    <>
      {/* Header */}
      <ArticleScreenHeader text={`Resources on reporting injustice in the ${categoryName} environment!`} />

      {/* Report It Resources */}
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
        {!loading && !error && resources.length > 0 ? (
          <FlatList
            style={theme.sanityCardList}
            data={resources}
            renderItem={({ item, index }) => {
              return (
                <ContentCard
                  index={index}
                  navigateTo="Resource"
                  content={item}
                  queryContent={QUERY_RESOURCE}
                />
              );
            }}
            keyExtractor={item => { return item._id; }}
          />
        ) : (
          <TextSpanner text="Unfortunately there is nothing here yet... Check back soon!" />
        )}
      </View>
    </>
  );
};

export default ReachOutResources;
