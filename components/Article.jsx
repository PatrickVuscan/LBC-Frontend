import { H1, H2 } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = ({
  title, subtitle, authorName, authorImageURL,
}) => (
  <View style={styles.header}>
    <Text style={styles.titleText}>
      {title}
    </Text>
    <Text style={styles.subtitleText}>
      {subtitle}
    </Text>
    <Text style={styles.bodyText}>
      {authorName}
    </Text>
    <Text style={styles.bodyText}>
      {authorImageURL}
    </Text>
  </View>
);

const Article = ({ article }) => {
  const {
    title,
    subtitle,
    author: {
      name: authorName,
      image: {
        asset: {
          url: authorImageURL,
        },
      },
    },
    mainImage: {
      caption: mainImageCaption,
      alt: mainImageAlt,
      asset: {
        url: mainImageURL,
      },
    },
    slugContainer: { slug },
    bodyRaw,
  } = article;

  return (
    <View style={styles.outerContainer}>
      <Header
        title={title}
        subtitle={subtitle}
        authorName={authorName}
        authorImageURL={authorImageURL}
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
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
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
