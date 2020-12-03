import { Spinner } from 'native-base';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { QUERY_ARTICLE } from '../api/queries/article';
import client from '../sanity/client';
import Body from './Body';
import CaptionedImage from './CaptionedImage';
import ErrorMessage from './ErrorMessage';
import Header from './Header';

const Article = ({ route }) => {
  const { id } = route.params;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [article, setArticle] = useState({});

  const {
    title,
    subtitle,
    publishedAt,
    authorName,
    authorImageURL,
    mainImageAlt,
    mainImageCaption,
    mainImageURL,
    body,
  } = article;

  useEffect(() => {
    !loading && setLoading(true);
    error && setError(false);
    client.fetch(QUERY_ARTICLE, { id })
      .then(res => {
        setLoading(false);
        setArticle(res[0]);
      })
      .catch(e => {
        setError(e);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <ScrollView
      automaticallyAdjustContentInsets
      contentContainerStyle={styles.scroll}
    >
      {loading && (
        <Spinner color="#7E54C6" />
      )}
      {error && (
        <ErrorMessage error={error} />
      )}
      {!loading && !error && (
        <>
          <Header
            title={title}
            subtitle={subtitle}
            authorName={authorName}
            authorImageURL={authorImageURL}
            date={publishedAt}
          />
          <CaptionedImage
            caption={mainImageCaption}
            alt={mainImageAlt}
            url={mainImageURL}
          />
          <Body body={body} />
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
});

export default Article;
