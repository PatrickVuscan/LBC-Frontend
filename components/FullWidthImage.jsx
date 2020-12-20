import React, { useEffect, useState } from 'react';
import { Dimensions, Image } from 'react-native';
import { Spinner } from 'native-base';
import { colours } from '../theme/theme';

// Because react native sort of sucks, displaying images is a pain.
// As a result, wherever we do display images, we display them as full width images
// This is possibly not very future proof, and this should be a first-to-fix issue when a
// more experienced React Native developer comes along
const FullWidthImage = ({ url, alt }) => {
  const [dimensions, setDimensions] = useState();

  useEffect(() => {
    url && Image.getSize(url, (srcWidth, srcHeight) => {
      const maxHeight = Dimensions.get('window').height; // or something else
      const maxWidth = Dimensions.get('window').width;

      const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
      setDimensions({ width: srcWidth * ratio, height: srcHeight * ratio });
    });
  }, [url]);

  return (
    dimensions
      ? (
        <Image
          source={{ uri: url }}
          style={{
            width: dimensions.width,
            height: dimensions.height,
          }}
          accessibilityLabel={alt}
        />
      )
      : <Spinner color={colours.purple} />
  );
};

export default FullWidthImage;
