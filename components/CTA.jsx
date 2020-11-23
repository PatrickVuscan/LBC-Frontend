import { Spinner } from 'native-base';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { QUERY_CTA } from '../api/queries/cta';
import client from '../sanity/client';
import Body from './Body';
import CaptionedImage from './CaptionedImage';
import ErrorMessage from './ErrorMessage';
import Header from './Header';

const CTA = ({ ctaID }) => {
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
    client.fetch(QUERY_CTA, { id: ctaID })
      .then(res => {
        setLoading(false);
        setCta(res[0]);
      })
      .catch(e => {
        setError(e);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ctaID]);

  return (
    <View style={styles.outerContainer}>
      {loading && (
        <Spinner color="purple" />
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

export default CTA;
