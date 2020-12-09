import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import Dropdown from 'react-native-picker-select';

import { colours } from '../theme/theme';

const DropdownMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const placeholder = {
    label: 'Select an article category...',
    value: null,
  };

  return (
    <Dropdown
      placeholder={placeholder}
      items={[
        { label: 'Featured', value: 'featured' },
        { label: 'Baseball', value: 'baseball' },
        { label: 'Hockey', value: 'hockey' },
      ]}
      Icon={() => {
        return (
          <Ionicons
            name="md-arrow-down"
            size={30}
            color="gray"
          />
        );
      }}
      value={selectedCategory}
      onValueChange={value => { setSelectedCategory(value); }}
      style={{
        inputIOS: {
          fontSize: 20,
        },
        placeholder: {
          fontSize: 20,
        },
      }}
    />
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    marginHorizontal: 25,
    marginVertical: 15,
  },
  outerContainer: {
    backgroundColor: colours.purple,
  },
  flatlist: {
    marginBottom: 15,
  },
});

export default DropdownMenu;
