import React from 'react';
import {
  Linking,
  StyleSheet,
  Text,
  View,
} from 'react-native';

/* Displays an email, with an onclick to open to an email
! IMPORTANT FOR FUTURE IMPROVEMENT:
We found out that it is possible to extend the `mailto...` thing below, to also include the
Subject line, and body text to fill it with.
This could mean that this could be extended, to provide LBC the ability to create an
email template on Sanity Studio, and import that content here, so that by clicking this Email link,
it not only opens the mail application, but furthermore, also enters their default text and subject!
*/
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
