import { Thumbnail } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import dateConvert from '../utils/dateConvert';
import { colours } from '../theme/theme';

// Inside of content like articles or resources from Sanity, this will
// render the Author image and date of posting inside of the header component
const MiniAuthor = ({ name, url, date }) => {
  let textComponent = null;

  if (date && name) {
    textComponent = (
      <View style={styles.textWrapper}>
        <Text>
          <Text style={styles.by}>By </Text>
          <Text style={styles.author}>
            {name}
          </Text>
        </Text>
        <Text>
          <Text style={styles.by}>
            {`Posted on ${dateConvert(date)}`}
          </Text>
        </Text>
      </View>
    );
  } else if (date) {
    textComponent = (
      <Text>
        <Text style={styles.by}>
          {`Posted on ${dateConvert(date)}`}
        </Text>
      </Text>
    );
  } else if (name) {
    textComponent = (
      <Text>
        <Text style={styles.by}>By </Text>
        <Text style={styles.author}>
          {name}
        </Text>
      </Text>
    );
  }

  return (
    <View style={styles.container}>
      {url && (
        <Thumbnail
          source={{ uri: url }}
          style={styles.image}
        />
      )}
      {textComponent}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 2,
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textWrapper: {
    flex: 1,
    flexShrink: 1,
  },
  by: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#eeeeee',
  },
  author: {
    fontSize: 16,
    color: colours.gold,
  },
  image: {
    marginRight: 10,
  },
});

export default MiniAuthor;
