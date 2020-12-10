// @ts-check
import {
  Button, Container, Content, Header, Icon, Left, Right, Text,
} from 'native-base';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colours } from '../theme/theme';

export default props => {
  let headerColor = colours.purple;
  let closingButton;
  if (props.post.username === props.loggedInUser.username) {
    headerColor = 'black';
    closingButton = (
      <Button
        transparent
        style={{ flexDirection: 'row', marginLeft: 'auto' }}
        onPress={() => { return props.deletePost(props.post); }}
      >
        <Icon
          name="close"
          style={{ alignItems: 'center', color: headerColor }}
        />
      </Button>
    );
  }
  let displayedUser = props.post.username;
  if (props.post.anonymous) {
    displayedUser = 'Anonymous';
  }
  return (
    <Container style={styles.postContainer}>
      <Header style={{ backgroundColor: headerColor }}>
        <Left>
          <Text style={{ color: colours.gold }}>
            {displayedUser}
          </Text>
        </Left>
        <Right>
          <Text style={{ color: 'white' }}>
            {props.post.post_header}
          </Text>
        </Right>
      </Header>
      <Content
        contentContainerStyle={{ justifyContent: 'space-between' }}
        style={{ backgroundColor: 'white' }}
      >
        <Text style={{ marginTop: 10, fontSize: 18, color: '#555' }}>
          {props.post.post_body}
        </Text>
      </Content>
      <View style={{ padding: 0, flexDirection: 'row', alignItems: 'flex-end' }}>
        <Button
          transparent
          onPress={() => {
            props.setCurrViewedPost(props.post);
            props.setViewPost(true);
          }}
        >
          <Icon
            color={colours.purple}
            name="ios-chatboxes"
            style={{ flexDirection: 'row', color: headerColor }}
          />
        </Button>
        {closingButton}
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    paddingTop: 20,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    height: 250,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'column',
    maxHeight: 300,
  },
});
