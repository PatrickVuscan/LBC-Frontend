import React, { useState, useEffect } from 'react';
import {
  Image, StyleSheet, Dimensions,
} from 'react-native';

const DynamicImage = ({ url }) => {
  const [dimensions, setDimensions] = useState({});

  useEffect(() => {
    Image.getSize(url, (srcWidth, srcHeight) => {
      const maxHeight = Dimensions.get('window').height; // or something else
      const maxWidth = Dimensions.get('window').width;

      const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
      setDimensions({ width: srcWidth * ratio, height: srcHeight * ratio });
    });
  }, [url]);

  return (
    <Image
      source={{ uri: url }}
      style={{
        width: dimensions.width,
        height: dimensions.height,
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default DynamicImage;
