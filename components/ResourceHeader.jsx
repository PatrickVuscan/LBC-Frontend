import React from 'react';
import { StyleSheet, View } from 'react-native';
import Subtitle from './Subtitle';
import Title from './Title';
import { colours } from '../theme/theme';

const ResourceHeader = ({
  name, subtitle, email, phoneNumber,
}) => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <Title title={name} />
        {subtitle && <Subtitle subtitle={subtitle} />}
        {email && <Subtitle subtitle={`Email: ${email}`} />}
        {phoneNumber && <Subtitle subtitle={`Non-emergency phone number: ${phoneNumber}`} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //
  innerContainer: {
    marginHorizontal: 25,
    marginVertical: 15,
  },
  // Used for providing background color
  outerContainer: {
    marginTop: -10,
    backgroundColor: colours.purple,
  },
});

export default ResourceHeader;
