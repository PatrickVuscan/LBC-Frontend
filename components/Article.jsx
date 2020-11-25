import { Spinner } from 'native-base';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { QUERY_ARTICLE } from '../api/queries/article';
import client from '../sanity/client';
import Body from './Body';
import CaptionedImage from './CaptionedImage';
import ErrorMessage from './ErrorMessage';
import Header from './Header';

const Article = ({ articleID }) => {
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
    client.fetch(QUERY_ARTICLE, { id: articleID })
      .then(res => {
        setLoading(false);
        setArticle(res[0]);
      })
      .catch(e => {
        setError(e);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [articleID]);

  return (
    <View style={styles.outerContainer}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    flexGrow: 1,
  },
});

export default Article;
