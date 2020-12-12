import { Picker, View } from 'native-base';
import React from 'react';
import { Text } from 'react-native';
import { Chevron } from 'react-native-shapes';
import { colours } from '../theme/theme';

// Requires the below, with each item having a _id for the key, and name for the label
const DropdownMenu = props => {
  const {
    text, placeholder, items, selectedItem, onValueChange,
  } = props;

  return (
    <View
      style={{
        alignSelf: 'stretch',
        marginHorizontal: 20,
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 20 }}>
        {`${text}: `}
      </Text>
      <Picker
        mode="dropdown"
        placeholder={placeholder}
        textStyle={{ fontSize: 20 }}
        headerStyle={{ backgroundColor: colours.purple }}
        headerBackButtonTextStyle={{ color: 'white' }}
        headerTitleStyle={{ color: 'white' }}
        placeholderIconColor={colours.purple}
        iosIcon={(
          <Chevron
            style={{ alignSelf: 'center' }}
            size={1.5}
            color={colours.purple}
          />
        )}
        selectedValue={selectedItem}
        onValueChange={onValueChange}
      >
        {items && items.map(category => {
          return (
            <Picker.Item
              key={category._id}
              label={category.name}
              value={category._id}
            />
          );
        })}
      </Picker>
    </View>
  );

  // return (
  //   <>
  //     <Text
  //       style={{
  //         fontSize: 18,
  //         margin: 10,
  //       }}
  //     >
  //       { header }
  //     </Text>
  //     {/* <Dropdown
  //       placeholder={placeholder}
  //       items={items}
  //       value={selectedCategory}
  //       Icon={() => {
  //         return (
  //           <Chevron
  //             size={1.5}
  //             color="gray"
  //           />
  //         );
  //       }}
  //       onValueChange={onValueChange}
  //       style={{
  //         ...pickerSelectStyles,
  //       }}
  //     /> */}
  //   </>
  // );
};

// const pickerSelectStyles = StyleSheet.create({
//   inputIOS: {
//     fontSize: 18,
//     paddingVertical: 10,
//     paddingHorizontal: 10,
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 10,
//     color: 'black',
//     paddingRight: 30, // to ensure the text is never behind the icon
//   },
//   inputAndroid: {
//     fontSize: 18,
//     paddingHorizontal: 10,
//     paddingVertical: 10,
//     borderWidth: 0.5,
//     borderColor: 'purple',
//     borderRadius: 10,
//     color: 'black',
//     paddingRight: 30, // to ensure the text is never behind the icon
//   },
//   iconContainer: {
//     height: '100%',
//     justifyContent: 'center',
//     paddingRight: 10,
//   },
// });

export default DropdownMenu;
