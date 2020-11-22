// @ts-check
import { useQuery } from '@apollo/client';
import {
  Container, Content, Header, Spinner, Text, View,
} from 'native-base';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { QUERY_ARTICLE } from '../api/queries/article';
import theme from '../theme/theme';
import Article from '../components/Article';
import ErrorMessage from '../components/ErrorMessage';

const Articles = () => {
  const { data, loading, error } = useQuery(QUERY_ARTICLE('c4e56596-4d7a-4e1f-9157-c4383484f52f'));

  return (
    <Container>
      <ScrollView
        automaticallyAdjustContentInsets
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'space-between',
        }}
      >
        <Header
          style={theme.appHeader}
          androidStatusBarColor="#2c3e50"
          iosBarStyle="light-content"
        >
          <Text style={theme.appHeaderText}>Articles</Text>
        </Header>
        <Content
          padder
          contentContainerStyle={{ flex: 1 }}
        >
          <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            {loading && (
              <Spinner color="purple" />
            )}
            {error && (
              <ErrorMessage error={error} />
            )}
            {!loading && !error && (
              <Article article={data.Article} />
            )}
          </View>
        </Content>
      </ScrollView>
    </Container>
  );
};

export default Articles;
