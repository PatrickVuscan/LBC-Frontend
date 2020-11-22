import React from 'react';
import { StyleSheet, Text } from 'react-native';

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
