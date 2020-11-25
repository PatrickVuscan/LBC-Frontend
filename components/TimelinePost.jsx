// @ts-check
import {
  Button, Container, Content, Header, Icon, Left, Right, Text,
} from 'native-base';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default props => {
  let headerColor = 'purple';
  let closingButton;
  if (props.post.user === 'user') {
    headerColor = 'green';
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
  let displayedUser = props.post.user;
  if (props.post.anon) {
    displayedUser = 'Anonymous';
  }
  return (
    <Container style={styles.postContainer}>
      <Header style={{ backgroundColor: headerColor }}>
        <Left>
          <Text style={{ color: 'white' }}>
            {displayedUser}
          </Text>
        </Left>
        <Right>
          <Text style={{ color: 'white' }}>
            {props.post.title}
          </Text>
        </Right>
      </Header>
      <Content
        contentContainerStyle={{ justifyContent: 'space-between' }}
        style={{ backgroundColor: 'white' }}
      >
        <Text style={{ marginTop: 10, fontSize: 18, color: '#555' }}>
          {props.post.text}
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
            color="purple"
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
  },
});
