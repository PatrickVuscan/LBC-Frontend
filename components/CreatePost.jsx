import {
  Button,
  Container,
  Header,
  Icon, Input, Text,
} from 'native-base';
import React from 'react';
import { View } from 'react-native';
import theme from '../theme/theme';

export default class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postText: '',
      postTitle: 'Post Title',
      anonColor: 'purple',
    };
    this.changeAnonColor = this.changeAnonColor.bind(this);
    this.savePost = this.savePost.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  // eslint-disable-next-line react/sort-comp
  changeAnonColor() {
    if (this.state.anonColor === 'purple') {
      this.setState({ anonColor: '#008000' });
    } else {
      this.setState({ anonColor: 'purple' });
    }
  }

  savePost() {
    let anonymous = false;
    if (this.state.anonColor === '#008000') {
      anonymous = true;
    }
    const newPostContent = {
      text: this.state.postText,
      anon: anonymous,
      title: this.state.postTitle,
      user: 'user',
      comments: [],
    };

    const a = this.props.posts;
    a.unshift(newPostContent);
    this.props.setAllPosts(a);

    this.props.newPost(false);
  }

  handleTitleChange(input) {
    this.setState({ postTitle: input });
  }

  handleInputChange(input) {
    this.setState({ postText: input });
  }

  render() {
    return (
      <Container>
        <Header style={{ alignItems: 'center', backgroundColor: 'purple' }}>
          <Button
            onPress={() => { return this.props.newPost(false); }}
            transparent
            // There are currently two alignSelfs here. Please choose which one you meant to have.
            // For now I believe the second one is the one used, so I left that one in.
            // style={{ alignSelf: 'flex-start', alignSelf: 'center', float: 'left' }}
            style={{ alignSelf: 'center', float: 'left' }}
          >
            <Icon
              name="close"
              style={{ flexDirection: 'row', float: 'left' }}
            />
          </Button>
          <Text
            style={{
              color: 'white', fontSize: 20, marginLeft: 'auto', marginRight: 20,
            }}
          >
            Write up your new post!
          </Text>
        </Header>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            width: '100%',
          }}
        >
          <Input
            style={{
              flex: 1,
              width: '100%',
              fontSize: 24,
              alignContent: 'flex-start',
              maxHeight: 50,
              justifyContent: 'flex-start',
              textAlignVertical: 'top',
              margin: 5,
              borderBottomColor: '#bbb',
              borderBottomWidth: 2,
            }}
            placeholder="Post Title"
            onChangeText={this.handleTitleChange}
          />
          <Input
            style={{
              flex: 1,
              width: '100%',
              fontSize: 24,
              alignContent: 'flex-start',
              justifyContent: 'flex-start',
              textAlignVertical: 'top',
              margin: 5,
            }}
            multiline
            placeholder="What's happening?"
            onChangeText={this.handleInputChange}
          />
        </View>
        <View style={theme.footer}>
          <Button
            rounded
            style={{
              backgroundColor: this.state.anonColor, height: 40, width: 135, justifyContent: 'center',
            }}
            onPress={this.changeAnonColor}
          >
            <Text style={{ color: 'white' }}>Anonymous</Text>
          </Button>
          <Button
            rounded
            style={{
              backgroundColor: 'purple', height: 40, width: 94, marginLeft: 'auto', justifyContent: 'center',
            }}
            onPress={this.savePost}
          >
            <Text style={{ color: 'white', textAlign: 'center' }}>Post</Text>
          </Button>
        </View>

      </Container>
    );
  }
}
