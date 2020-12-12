import { Spinner, View } from 'native-base';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import ContentCard from '../components/ContentCard';
import ErrorMessage from '../components/ErrorMessage';
import Title from '../components/Title';
import client from '../sanity/client';
import { QUERY_RESOURCE } from '../sanity/reportIt';
import { colours, theme } from '../theme/theme';
import TextSpanner from '../components/TextSpanner';

const ReportItResources = ({ route, navigation }) => {
  const { categoryID, categoryName, queryCategory } = route.params;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [reportItResources, setReportItResources] = useState([]);

  useEffect(() => {
    // Set the header title for this category!
    navigation.setOptions({ title: categoryName });

    // Query the resources from Sanity, dependent on the category chosen
    client.fetch(queryCategory(categoryID))
      .then(res => {
        setLoading(false);
        setReportItResources(res);
      })
      .catch(e => {
        setError(e);
      });
  }, [categoryName, categoryID]);

  return (
    <>
      {/* Header */}
      <View style={theme.sanityHeaderOuter}>
        <View style={theme.sanityHeaderInner}>
          <Title title="Take action in your community!" />
        </View>
      </View>

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
        {!loading && !error && reportItResources.length > 0 ? (
          <FlatList
            style={theme.sanityCardList}
            data={reportItResources}
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

export default ReportItResources;
