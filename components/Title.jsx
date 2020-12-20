import React from 'react';
import { StyleSheet, Text } from 'react-native';

// Displays a title in the content header and content cards
const Title = ({ title }) => {
  return (
    <Text style={styles.title}>
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#eeeeee',
  },
});

export default Title;
