import {
  Button,
  Container,
  Header,
  Icon,
  Input,
  Text,
} from 'native-base';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { colours } from '../theme/theme';

// eslint-disable-next-line no-unused-vars
const ViewPost = ({
  post, post: {
    text, user, anon, title,
  }, setViewPost,
}) => {
  const [commentInput, setCommentInput] = useState('');
  const [comments, setComments] = useState(post.comments);

  function addComment() {
    setComments(state => { return ([...state, ['user', commentInput]]); });
    const a = comments;
    a.push(['user', commentInput]);
    // eslint-disable-next-line no-param-reassign
    post.comments = a;
  }

  function handleInputChange(input) {
    setCommentInput(input);
  }

  return (
    <Container>
      <ScrollView>
        <Header style={{ alignItems: 'center', backgroundColor: colours.purple }}>
          <Button
            onPress={() => { return setViewPost(false); }}
            transparent
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
            {post.title}
          </Text>
        </Header>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            width: '100%',
            minHeight: 350,
            borderBottomColor: '#bbb',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        >
          <Text
            style={{
              flex: 1,
              width: '100%',
              fontSize: 24,
              alignContent: 'flex-start',
              justifyContent: 'flex-start',
              textAlignVertical: 'top',
              margin: 5,
            }}
          >
            {text}
          </Text>
        </View>
        <Header style={{ backgroundColor: colours.purple }}>
          <Text
            style={{ color: 'white', fontSize: 19, alignSelf: 'center' }}
          >
            Comments
          </Text>
        </Header>
        <View style={{ flexDirection: 'row' }}>

          <Input
            placeholder="Write a comment"
            onChangeText={handleInputChange}
          />
          <Button
            onPress={addComment}
            style={{ backgroundColor: colours.purple }}
          >
            <Text>Post Comment</Text>
          </Button>
        </View>
        <View>
          {comments.map((item, index) => {
            return (
              <View
                style={{
                  padding: 14,
                  borderBottomColor: '#bbb',
                  borderBottomWidth: 2,
                }}
              >
                <Text
                  style={{ fontSize: 18 }}
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                >
                  {item[0]}
                  :
                  {' '}
                  {item[1]}
                </Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </Container>
  );
};

export default ViewPost;
