import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text } from 'react-native';
import Dropdown from 'react-native-picker-select';

const DropdownMenu = props => {
  // TODO: bring state out to articles components, so state is not stuck in
  // dropdown, but in props (hoist state into parent, since parent need s to access
  // this state)!
  const [selectedCategory, setSelectedCategory] = useState();
  const placeholder = {
    label: 'Select an article category...',
    value: null,
  };
  const { header } = props;

  return (
    <>
      <Text
        style={
          {
            fontSize: 18,
            // padding: 10, // spacing inside border
            margin: 10, // spacing outside border
            // overlapping margins = take largest margin
          }
        }
      >
        { header }
      </Text>
      <Dropdown
        // TODO: factor these remaining items out into props.
        placeholder={placeholder}
        items={[
          { label: 'Mental Health', value: 'mental health' },
          { label: 'Social Justice', value: 'social justice' },
          { label: 'Education', value: 'education' },
        ]}
        value={selectedCategory}
        onValueChange={value => { setSelectedCategory(value); }}
        Icon={() => {
          return (
            <Ionicons
              name="md-arrow-down"
              size={30}
              color="gray"
            />
          );
        }}
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
