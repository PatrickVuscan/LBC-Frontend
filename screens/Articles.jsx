import { Spinner, View } from 'native-base';
import React, { useEffect, useState } from 'react';
import { QUERY_ARTICLES } from '../api/queries/article';
import Article from '../components/Article';
import ErrorMessage from '../components/ErrorMessage';
import ScreenBase from '../components/ScreenBase';
import client from '../sanity/client';
import { colours } from '../theme/theme';

const Articles = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [articles, setArticles] = useState();

  useEffect(() => {
    client.fetch(QUERY_ARTICLES())
      .then(res => {
        setLoading(false);
        setArticles(res);
      })
      .catch(e => {
        setError(e);
      });
  }, []);

  return (
    <ScreenBase
      header="Articles"
      padder
    >
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        {loading && (
          <Spinner color={colours.purple} />
        )}
        {error && (
          <ErrorMessage error={error} />
        )}
        {!loading && !error && articles && (
          <Article articleID={articles[0]._id} />
        )}
      </View>
    </ScreenBase>
  );
};

export default Articles;
