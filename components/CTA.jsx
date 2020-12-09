import { Spinner } from 'native-base';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { QUERY_CTA } from '../api/queries/cta';
import client from '../sanity/client';
import { colours } from '../theme/theme';
import Body from './Body';
import CaptionedImage from './CaptionedImage';
import ErrorMessage from './ErrorMessage';
import Header from './Header';

const CTA = ({ route }) => {
  const { id } = route.params;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [cta, setCta] = useState({});

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
  } = cta;

  useEffect(() => {
    !loading && setLoading(true);
    error && setError(false);
    client.fetch(QUERY_CTA, { id })
      .then(res => {
        setLoading(false);
        setCta(res[0]);
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
        <Spinner color={colours.purple} />
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
            key={id}
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

export default CTA;
