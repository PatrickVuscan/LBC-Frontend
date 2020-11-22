import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ErrorMessage = error => {
  let errorToDisplay;

  if (error && typeof error === 'object') {
    errorToDisplay = JSON.stringify(error);
  }

  return (
    <View>
      <Text style={styles.pardon}>
        Oh no! We seem to have run into an error.
        Please try again later, or contact Lady Ballers Camp!
      </Text>
      <Text style={styles.error}>
        {errorToDisplay || error || 'No information about this error is available :('}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    color: 'red',
  },
  pardon: {
    fontSize: 16,
    fontStyle: 'italic',
  },
});

export default ErrorMessage;
