// @ts-check
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { extractArticleInfo } from '../api/queries/article';
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
      <Text>
        {mainImageURL}
      </Text>
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
    backgroundColor: 'black',
    color: 'white',
  },
  container: {
    margin: 10,
    backgroundColor: '#eee',
    flexGrow: 1,
    flex: 1,
  },
  header: {
    margin: 10,
    backgroundColor: '#eee',
    flexGrow: 1,
    flex: 1,
  },
  subtitleText: {
    fontSize: 20,
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
