// @ts-check
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'native-base';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colours } from '../theme/theme';

const ContentCard = ({
  content,
  navigateTo,
  queryContent,
  index,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(navigateTo, {
          id: content._id,
          queryContent,
        });
      }}
    >
      <View
        style={
          [
            styles.card,
            { backgroundColor: content.featured ? colours.purple : 'black' },
            { marginTop: index === 0 ? 15 : 0 },
          ]
        }
      >
        {content.featured && (
          <Text style={styles.featured}>
            Featured
          </Text>
        )}
        <Text style={styles.title}>
          {content.title}
        </Text>
        {content.subtitle && (
          <Text style={styles.subtitle}>
            {content.subtitle}
          </Text>
        )}
        {content.mainImageURL && (
          <Image
            source={{ uri: content.mainImageURL }}
            style={{
              marginTop: 10,
              borderRadius: 5,
              width: '100%',
              height: 200,
            }}
            resizeMode="cover"
            accessibilityLabel={content.mainImageAlt}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ContentCard;

const styles = StyleSheet.create({
  card: {
    padding: 20,
    marginBottom: 15,
    marginHorizontal: 15,
    borderRadius: 10,
    alignSelf: 'stretch',
  },
  featured: {
    fontSize: 18,
    fontStyle: 'italic',
    color: colours.gold,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#eeeeee',
  },
  subtitle: {
    fontSize: 18,
    color: '#eeeeee',
  },
});
