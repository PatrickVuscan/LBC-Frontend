// @ts-check
import { Ionicons } from '@expo/vector-icons';
import {
  Button, Content, Text,
} from 'native-base';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colours } from '../theme/theme';

export default props => {
  const currentUsersPost = props.post.username === props.loggedInUser.username;
  const headerColor = currentUsersPost ? 'black' : colours.purple;
  const displayedUser = props.post.anonymous ? 'Anonymous' : props.post.username;
  const closingButton = currentUsersPost ? (
    <Button
      transparent
      style={{ flexDirection: 'row', marginLeft: 'auto' }}
      onPress={() => { return props.deletePost(props.post); }}
    >
      <Ionicons
        name="close"
        size={24}
        style={{
          alignItems: 'center',
          color: headerColor,
          paddingRight: 5,
        }}
      />
    </Button>
  ) : null;

  return (
    <View style={styles.postContainer}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: headerColor }]}>
        {/* Username */}
        <Text style={styles.username}>
          {displayedUser}
        </Text>

        {/* Post Title */}
        <Text style={{ color: 'white' }}>
          {props.post.post_header}
        </Text>
      </View>

      {/* Post Text */}
      <View>
        <Text
          style={{
            margin: 10,
            marginBottom: 0,
            fontSize: 18,
            color: '#555',
          }}
        >
          {props.post.post_body}
        </Text>
      </View>

      {/* Buttons at bottom */}
      <View
        style={{ flexDirection: 'row', paddingHorizontal: 10 }}
      >
        <Button
          transparent
          onPress={() => {
            props.setCurrViewedPost(props.post);
            props.setViewPost(true);
          }}
        >
          <Ionicons
            color={colours.purple}
            name="chatbox"
            size={24}
          />
        </Button>
        {closingButton}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    marginTop: 20,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'column',
    maxHeight: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colours.purple,
  },
  header: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  username: {
    color: colours.gold,
  },
});
