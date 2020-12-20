import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FullWidthImage from './FullWidthImage';

// Using a full width image, this renders a passed image and provides caption text below it
const CaptionedImage = ({
  url, caption, alt,
}) => {
  if (!url) return null;

  return (
    <View>
      <FullWidthImage
        url={url}
        alt={alt}
      />
      {caption ? (
        <Text style={styles.caption}>
          {caption}
        </Text>
      ) : <View style={styles.spacer} />}
    </View>
  );
};

const styles = StyleSheet.create({
  caption: {
    fontStyle: 'italic',
    fontSize: 16,
    margin: 10,
  },
  spacer: {
    margin: 5,
  },
});

export default CaptionedImage;
