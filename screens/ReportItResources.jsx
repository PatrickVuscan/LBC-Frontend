// @ts-check
import { Spinner, View } from 'native-base';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import ContentCard from '../components/ContentCard';
import ErrorMessage from '../components/ErrorMessage';
import Title from '../components/Title';
import client from '../sanity/client';
import { QUERY_RESOURCE } from '../sanity/reportIt';
import { colours, theme } from '../theme/theme';

const ReportItResources = ({ route, navigation }) => {
  const { categoryID, categoryName, queryCategory } = route.params;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [reportItResources, setReportItResources] = useState();

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
        {!loading && !error && reportItResources && (
          <FlatList
            style={theme.sanityCardList}
            data={reportItResources}
            renderItem={({ item }) => {
              return (
                <ContentCard
                  navigateTo="Resource"
                  content={item}
                  queryContent={QUERY_RESOURCE}
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

export default ReportItResources;
