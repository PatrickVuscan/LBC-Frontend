// @ts-check
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { QUERY_RESOURCES_BY_CATEGORY } from '../sanity/reportIt';

// Used specifically in Report It
const ContentCard = ({ category, navigateTo }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(navigateTo, {
          categoryID: category._id,
          categoryName: category.name,
          queryCategory: QUERY_RESOURCES_BY_CATEGORY,
        });
      }}
    >
      <View
        style={[styles.card, category.name === 'Emergency' ? styles.emergencyCard : {}]}
      >
        <Text style={styles.name}>
          {category.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ContentCard;

const styles = StyleSheet.create({
  emergencyCard: {
    backgroundColor: 'red',
    paddingVertical: 50,
    textAlign: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'black',
    padding: 20,
    marginTop: 15,
    marginHorizontal: 15,
    borderRadius: 10,
    alignSelf: 'stretch',
    textAlign: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#eeeeee',
  },
});
