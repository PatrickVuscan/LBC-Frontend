import React from 'react';
import { StyleSheet, View } from 'react-native';
import { extractArticleInfo } from '../api/queries/article';
import Body from './Body';
import CaptionedImage from './CaptionedImage';
import Header from './Header';

const Article = ({ article }) => {
  const {
    title,
    subtitle,
    authorName,
    authorImageURL,
    mainImageCaption,
    mainImageAlt,
    mainImageURL,
    slug,
    bodyRaw,
    publishDate,
  } = extractArticleInfo(article);

  return (
    <View style={styles.outerContainer}>
      <Header
        title={title}
        subtitle={subtitle}
        authorName={authorName}
        authorImageURL={authorImageURL}
        date={publishDate}
      />
      <CaptionedImage
        caption={mainImageCaption}
        alt={mainImageAlt}
        url={mainImageURL}
      />
      <Body bodyRaw={bodyRaw} />
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    flexGrow: 1,
  },
  // container: {
  //   margin: 10,
  //   backgroundColor: '#eee',
  //   flexGrow: 1,
  //   flex: 1,
  // },
  bodyText: {
    fontSize: 30,
  },
  italic: {
    fontStyle: 'italic',
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default Article;
