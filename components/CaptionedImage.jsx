import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FullWidthImage from './FullWidthImage';

const CaptionedImage = ({
  url, caption, alt,
}) => {
  return (
    <View>
      <FullWidthImage
        url={url}
        alt={alt}
      />
      <Text style={styles.caption}>
        {caption}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  caption: {
    fontStyle: 'italic',
    fontSize: 16,
    margin: 10,
  },
});

export default CaptionedImage;
