// @ts-check
import {
  Button,
  Container,
  Content,
  Header,
  Text,
} from 'native-base';
import React, { useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CreatePost from '../components/CreatePost';
import TimelinePost from '../components/TimelinePost';
import ViewPost from '../components/ViewPost';
import theme from '../theme/theme';

const exampleUser = {
  text: 'This is an example post. I am posting stuff right now! Wow!',
  user: 'Anonymous',
  anon: true,
  comments: [],

};

const Timeline = props => {
  const [newPostScreen, setNewPostScreen] = useState(false);
  const [allPosts, setAllPosts] = useState([]);
  const [viewPost, setViewPost] = useState(false);
  const [currViewedPost, setCurrViewedPost] = useState({});

  function deletePostFromAllPosts(post) {
    const newPostsList = [...allPosts];

    newPostsList.forEach((p, index) => {
      if (p === post) {
        newPostsList.splice(index, 1);
      }
    });

    setAllPosts(newPostsList);
  }

  if (newPostScreen === true) {
    return (
      <Container>
        <CreatePost
          newPost={setNewPostScreen}
          posts={allPosts}
          setAllPosts={setAllPosts}
        />
      </Container>
    );
  }

  if (viewPost) {
    return (
      <Container>
        <ViewPost
          setViewPost={setViewPost}
          post={currViewedPost}
        />
      </Container>
    );
  }

  return (
    <Container>
      <ScrollView
        automaticallyAdjustContentInsets
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'space-between',
        }}
      >
        <Header style={theme.verticalCenter}>
          <Text style={theme.header}>Timeline!</Text>
        </Header>
        <Content style={{ flex: 1 }}>
          <View style={{ flexGrow: 1, alignItems: 'center', flexDirection: 'row' }}>
            <Button>
              <Text
                onPress={() => {
                  props.navigation.navigate('Resources');
                }}
              >
                Click Me!
              </Text>
            </Button>
            <Button
              style={{ alignSelf: 'flex-end', marginLeft: 'auto' }}
              onPress={() => setNewPostScreen(true)}
            >
              <Text>
                New Post
              </Text>
            </Button>
          </View>
          {allPosts.map((item, index) => (
            <TimelinePost
              post={item}
              // Temp disable until dynamic content
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              deletePost={deletePostFromAllPosts}
              setViewPost={setViewPost}
              setCurrViewedPost={setCurrViewedPost}
            />
          ))}
          <View>
            <TimelinePost
              post={exampleUser}
              deletePost={deletePostFromAllPosts}
              setViewPost={setViewPost}
              setCurrViewedPost={setCurrViewedPost}
            />
            <TimelinePost
              post={exampleUser}
              deletePost={deletePostFromAllPosts}
              setViewPost={setViewPost}
              setCurrViewedPost={setCurrViewedPost}
            />
          </View>
        </Content>
      </ScrollView>
    </Container>
  );
};

export default Timeline;
