import {
  Button,
  Container,
  Header,
  Icon,
  Input,
  Text,
} from 'native-base';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { colours } from '../theme/theme';

// let url = 'https://lbc-backend-fxp5s3idfq-nn.a.run.app';

// eslint-disable-next-line no-unused-vars
const ViewPost = ({
  post, post: {
    post_body,
    post_header,
    anonymous,
    username,
    post_id,
  }, setViewPost
}) => {
  const [commentInput, setCommentInput] = useState('');
  const [allComments, setAllComments] = useState([]);

  function addComment() {
    const newComment = {
      content: commentInput,
      user_id: 1,
    };

    const a = allComments;
    a.push(newComment);
    setAllComments(a);
    setCommentInput('');

    try {
      const res = fetch(
        `https://lbc-backend-fxp5s3idfq-nn.a.run.app/posts/${post_id}/comments`,
        {
          method: 'POST',
          body: JSON.stringify(newComment),
        },
      );

      return res.status == 200;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  // url = `https://lbc-backend-fxp5s3idfq-nn.a.run.app/posts/1/comments/`;

  useEffect(() => {
    try {
      fetch(`https://lbc-backend-fxp5s3idfq-nn.a.run.app/posts/${post_id}/comments/`)
        .then(res => { return res.json(); })
        .then(data => {
          if (Array.isArray(data)) {
            setAllComments(data);
          }
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

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
            {post_header}
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
            {post_body}
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
            onSubmitEditing={addComment}
            style={{
              borderBottomColor: '#bbb',
              borderBottomWidth: 2,
            }}
          />
          <Button
            onPress={addComment}
            style={{ backgroundColor: colours.gold }}
          >
            <Text style={{ color: colours.purple }}>Post Comment</Text>
          </Button>
        </View>
        <View>
          {allComments.map((item, index) => {
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
                {/* }
                <Text
                  style={{ fontSize: 22, color: colours.gold }}
                  // eslint-disable-next-line react/no-array-index-key
                >
                  {
                    item.user_id
                    // "user"
                  }
                  :
                </Text>
                { */}
                <Text
                  style={{ fontSize: 18 }}
                  // eslint-disable-next-line react/no-array-index-key
                >
                  {
                    item.content
                    // "hey"
                  }
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
