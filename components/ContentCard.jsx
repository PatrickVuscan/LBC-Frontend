// @ts-check
import { useNavigation } from '@react-navigation/native';
import {
  Button,
  Text, View,
} from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import Subtitle from './Subtitle';
import Title from './Title';

const ContentCard = ({ content, navigateTo }) => {
  const navigation = useNavigation();

  return (
    <View
      style={styles.card}
    >
      <Title title={content.title} />
      <Subtitle subtitle={content.subtitle} />

      <Button
        style={{ alignSelf: 'center', marginTop: 10 }}
        onPress={() => {
          navigation.navigate(navigateTo, { id: content._id });
        }}
      >
        <Text>
          View the full article
        </Text>
      </Button>
    </View>
  );
};

export default ContentCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#666',
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
    width: '100%',
  },
});
