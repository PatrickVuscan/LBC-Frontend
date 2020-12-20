import React from 'react';
import { StyleSheet, Text } from 'react-native';

// Displays a subtitle in the content header and content cards
const Subtitle = ({ subtitle }) => {
  return (
    <Text style={styles.subtitle}>
      {subtitle}
    </Text>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 20,
    color: '#eeeeee',
  },
});

export default Subtitle;
