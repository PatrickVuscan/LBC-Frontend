import { Thumbnail } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import dateConvert from '../utils/dateConvert';
import { colours } from '../theme/theme';

const MiniAuthor = ({ name, url, date }) => {
  return (
    <View style={styles.container}>
      <Thumbnail
        source={{ uri: url }}
        style={styles.image}
      />
      {date ? (
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
      ) : (
        <Text>
          <Text style={styles.by}>By </Text>
          <Text style={styles.author}>
            {name}
          </Text>
        </Text>
      )}

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
