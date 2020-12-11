import { Spinner, View } from 'native-base';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import CategoryCard from '../components/CategoryCard';
import ErrorMessage from '../components/ErrorMessage';
import Title from '../components/Title';
import client from '../sanity/client';
import { QUERY_EMERGENCY_CATEGORY, QUERY_OTHER_CATEGORIES } from '../sanity/reportIt';
import { colours, theme } from '../theme/theme';

const ReportItCategories = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [emergencyCategory, setEmergencyCategory] = useState();
  const [reportItCategories, setReportItCategories] = useState();

  // Query the categories from Sanity
  useEffect(() => {
    client.fetch(QUERY_EMERGENCY_CATEGORY)
      .then(res => {
        setLoading(false);
        setEmergencyCategory(res[0]);
      })
      .catch(e => {
        setError(e);
      });
    client.fetch(QUERY_OTHER_CATEGORIES)
      .then(res => {
        setLoading(false);
        setReportItCategories(res);
      })
      .catch(e => {
        setError(e);
      });
  }, []);

  // console.log(reportItCategories);

  return (
    <>
      {/* Header */}
      <View style={theme.sanityHeaderOuter}>
        <View style={theme.sanityHeaderInner}>
          <Title title="Where are you facing racism?" />
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

        {!loading && !error && emergencyCategory && (
          <View style={theme.sanityCardList}>
            <CategoryCard
              navigateTo="ReportItResources"
              category={emergencyCategory}
            />
          </View>
        )}

        {!loading && !error && reportItCategories && (
          <FlatList
            style={theme.sanityCardList}
            data={reportItCategories}
            renderItem={({ item }) => {
              return (
                <CategoryCard
                  navigateTo="ReportItResources"
                  category={item}
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

export default ReportItCategories;
