// @ts-check
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colours } from '../theme/theme';

const ArticleScreenHeader = ({ text }) => {
  return (
    <View style={styles.headerOuter}>
      <View style={styles.headerInner}>
        <Text style={styles.text}>
          {text}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerInner: {
    marginHorizontal: 25,
    marginVertical: 15,
  },
  headerOuter: {
  },
  text: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: colours.purple,
  },
});

export default ArticleScreenHeader;
