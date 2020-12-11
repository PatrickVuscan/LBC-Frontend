import React, { useEffect, useState } from 'react';
import {
  Linking,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Email = ({ phoneNumber }) => {
  const [digits, setDigits] = useState('');

  useEffect(() => {
    setDigits(phoneNumber.replace(/\D/g, ''));
  }, [phoneNumber]);

  return (
    <View style={styles.container}>
      <Text>
        <Text style={styles.text}>
          {'Phone number: '}
        </Text>
        <Text
          style={styles.phoneNumber}
          onPress={() => {
            try {
              Linking.openURL(`tel:${digits}`);
            } catch (e) { console.error(e); }
          }}
        >
          {phoneNumber}
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  phoneNumber: {
    fontSize: 20,
    color: 'blue',
  },
  container: {
    marginHorizontal: 10,
  },
});

export default Email;
