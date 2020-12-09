import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Dropdown from 'react-native-picker-select';

const DropdownMenu = props => {
  const {
    header, placeholder, items, selectedCategory, icon, onValueChange,
  } = props;

  return (
    <>
      <Text
        style={{
          fontSize: 18,
          margin: 10,
        }}
      >
        { header }
      </Text>
      <Dropdown
        placeholder={placeholder}
        items={items}
        value={selectedCategory}
        Icon={icon}
        onValueChange={onValueChange}
        style={{
          ...pickerSelectStyles,
        }}
      />
    </>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 18,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 10,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  iconContainer: {
    height: '100%',
    justifyContent: 'center',
    paddingRight: 10,
  },
});

export default DropdownMenu;
