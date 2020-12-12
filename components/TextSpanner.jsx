import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colours } from '../theme/theme';

// This component exists for spanning a view (through flex 1), and displaying some text
const TextSpanner = ({ text }) => {
  return (
    <View style={styles.view}>
      <Text
        style={styles.text}
      >
        {text}
      </Text>
    </View>
  );
};

export default TextSpanner;

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: colours.purple,
    fontSize: 20,
    fontWeight: '500',
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    padding: '15%',
  },
});
