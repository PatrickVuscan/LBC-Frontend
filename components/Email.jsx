import React from 'react';
import {
  Linking,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Email = ({ email }) => {
  return (
    <View style={styles.container}>
      <Text>
        <Text style={styles.text}>
          {'Email: '}
        </Text>
        <Text
          style={styles.email}
          onPress={() => {
            try {
              Linking.openURL(`mailto:${email}`);
            } catch (e) { console.error(e); }
          }}
        >
          {email}
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  email: {
    fontSize: 20,
    color: 'blue',
  },
  container: {
    marginHorizontal: 10,
  },
});

export default Email;
