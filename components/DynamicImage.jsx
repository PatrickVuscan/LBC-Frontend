import React, { useEffect, useState } from 'react';
import { Dimensions, Image } from 'react-native';

const DynamicImage = ({ url, alt }) => {
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
      accessibilityLabel={alt}
    />
  );
};

export default DynamicImage;
