// @ts-check
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { extractArticleInfo } from '../api/queries/article';
import DynamicImage from './DynamicImage';
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
      <DynamicImage url={mainImageURL} />
      <Text>
        {mainImageCaption}
      </Text>
      <Text>
        {mainImageAlt}
      </Text>
      <Text>
        {slug}
      </Text>
      <Text>
        {JSON.stringify(bodyRaw)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    flexGrow: 1,
  },
  container: {
    margin: 10,
    backgroundColor: '#eee',
    flexGrow: 1,
    flex: 1,
  },
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
