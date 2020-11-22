// @ts-check
import { useQuery } from '@apollo/client';
import { Spinner, View } from 'native-base';
import React from 'react';
import { QUERY_ARTICLE } from '../api/queries/article';
import Article from '../components/Article';
import ErrorMessage from '../components/ErrorMessage';
import ScreenBase from '../components/ScreenBase';

const Articles = () => {
  const { data, loading, error } = useQuery(QUERY_ARTICLE('948a898b-cd29-4f9f-9019-798700873173'));

  return (
    <ScreenBase
      header="Articles"
      padder
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
    </ScreenBase>
  );
};

export default Articles;
