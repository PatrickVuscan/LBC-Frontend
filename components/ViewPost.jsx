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
    text,
    // user,
    // anon,
    // title,
  }, setViewPost, updateCurrViewedPost,
}) => {
  const [commentInput, setCommentInput] = useState('');
  const [allComments, setAllComments] = useState([]); 

  /* 
  url = url + "/posts/" + post.pid + "/comments"
  const response = await fetch(url, { method: "GET"});
  const comments = allComments.concat(await response.json()); 
  
  setAllComments(comments); 
  */ 

  return (
    <Container>
      <ScrollView>
        <Header style={{ alignItems: 'center', backgroundColor: colours.purple }}>
          <Button
            onPress={() => { return setViewPost(false); }}
            transparent
            style={{ alignSelf: 'center' }}
          >
            <Icon
              name="close"
              style={{ flexDirection: 'row' }}
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
            onChangeText={inputVal => {
              setCommentInput(inputVal);
            }}
            onSubmitEditing={() => {
              updateCurrViewedPost(commentInput);
            }}
            style={{
              borderBottomColor: '#bbb',
              borderBottomWidth: 2,
            }}
          />
          <Button
            onPress={() => {
              updateCurrViewedPost(commentInput);
            }}
            style={{ backgroundColor: colours.gold }}
          >
            <Text style={{ color: colours.purple }}>Post Comment</Text>
          </Button>
        </View>
        <View>
          {post.comments.map((item, index) => {
            return (
              <View
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                style={{
                  padding: 14,
                  borderBottomColor: '#bbb',
                  borderBottomWidth: 2,
                }}
              >
                <Text
                  style={{ fontSize: 22, color: colours.gold }}
                  // eslint-disable-next-line react/no-array-index-key
                >
                  { item[0] }
                  :
                </Text>
                <Text
                  style={{ fontSize: 18 }}
                  // eslint-disable-next-line react/no-array-index-key
                >
                  { item[1] }
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
