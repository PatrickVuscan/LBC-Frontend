// @ts-check
import { useQuery } from '@apollo/client';
import {
  Container, Content, Header, Text, View,
} from 'native-base';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { QUERY_POST } from '../api/queries/post';
import theme from '../theme/theme';
import Article from '../components/Article';

const Articles = () => {
  const { data, loading, error } = useQuery(QUERY_POST('c4e56596-4d7a-4e1f-9157-c4383484f52f'));

  console.log(loading, data);

  if (loading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>
          Error
          {error}
        </Text>
      </View>
    );
  }

  const { Post } = data;

  return (
    <Container>
      <ScrollView
        automaticallyAdjustContentInsets
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'space-between',
        }}
      >
        <Header style={theme.verticalCenter}>
          <Text style={theme.header}>Articles</Text>
        </Header>
        <Content
          padder
          contentContainerStyle={{ flex: 1 }}
        >
          <View style={{ alignItems: 'center' }}>
            <Article article={Post} />
          </View>
        </Content>
      </ScrollView>
    </Container>
  );
};

export default Articles;
