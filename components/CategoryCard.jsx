// @ts-check
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// Used specifically in Report It
const CategoryCard = ({ category, navigateTo, queryCategory }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(navigateTo, {
          categoryID: category._id,
          categoryName: category.name,
          queryCategory,
        });
      }}
    >
      <View
        style={[category.name === 'Emergency' ? styles.emergencyCard : styles.card]}
      >
        <Text
          style={[category.name === 'Emergency' ? styles.emergencyName : styles.name]}
        >
          {category.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  emergencyCard: {
    backgroundColor: 'white',
    borderColor: 'red',
    borderWidth: 5,
    color: 'red',
    paddingVertical: 50,
    textAlign: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 15,
    marginHorizontal: 15,
    borderRadius: 10,
    alignSelf: 'stretch',
  },
  emergencyName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
  },
  card: {
    backgroundColor: 'black',
    padding: 10,
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
