import { Spinner } from 'native-base';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import client from '../sanity/client';
import { QUERY_ARTICLE } from '../sanity/educateArticle';
import Body from './Body';
import CaptionedImage from './CaptionedImage';
import Email from './Email';
import ErrorMessage from './ErrorMessage';
import Header from './Header';
import PhoneNumber from './PhoneNumber';

const Article = ({ route }) => {
  const { id } = route.params;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [article, setArticle] = useState({});

  const {
    title,
    subtitle,
    publishDateTime,
    authorName,
    authorImageURL,
    email,
    phoneNumber,
    mainImageAlt,
    mainImageCaption,
    mainImageURL,
    body,
  } = article;

  useEffect(() => {
    !loading && setLoading(true);
    error && setError(false);

    client.fetch(QUERY_ARTICLE(id))
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
            date={publishDateTime}
            email={email}
            phoneNumber={phoneNumber}
          />
          <CaptionedImage
            caption={mainImageCaption}
            alt={mainImageAlt}
            url={mainImageURL}
          />
          {phoneNumber && (
            <PhoneNumber phoneNumber={phoneNumber} />
          )}
          {email && (
            <Email email={email} />
          )}
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
