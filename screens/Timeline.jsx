// @ts-check
import {
  Button,
  Container,
  Text,
} from 'native-base';
import React, { useState } from 'react';
import { View } from 'react-native';
import CreatePost from '../components/CreatePost';
import ScreenBase from '../components/ScreenBase';
import TimelinePost from '../components/TimelinePost';
import ViewPost from '../components/ViewPost';
import { colours } from '../theme/theme';

// Citation: I used https://startreact.com/themes/twitter-clone-app/ as a reference for styling Timeline components

const exampleUser = {
  text: 'This is an example post. I am posting stuff right now! Wow!',
  user: 'Anonymous',
  title: 'Testing',
  anon: true,
  comments: [],

};

const exampleUser2 = {
  text: 'Another example post. I love this app!',
  user: 'Steve',
  title: 'How I love this app',
  anon: false,
  comments: [],
};

const Timeline = () => {
  const [newPostScreen, setNewPostScreen] = useState(false);
  const [allPosts, setAllPosts] = useState([]);
  const [viewPost, setViewPost] = useState(false);
  const [currViewedPost, setCurrViewedPost] = useState({
    text: '',
    user: '',
    title: '',
    anon: null,
    comments: [],
  });

  function deletePostFromAllPosts(post) {
    const newPostsList = [...allPosts];

    newPostsList.forEach((p, index) => {
      if (p === post) {
        newPostsList.splice(index, 1);
      }
    });

    setAllPosts(newPostsList);
  }

  const updateCurrViewedPost = commentValue => {
    const newComments = currViewedPost.comments;
    newComments.push(['user', commentValue]);

    const newViewedPost = {
      text: currViewedPost.text,
      user: currViewedPost.user,
      title: currViewedPost.title,
      anon: currViewedPost.anon,
      comments: newComments,
    };

    setCurrViewedPost(newViewedPost);
  };

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
          updateCurrViewedPost={updateCurrViewedPost}
        />
      </Container>
    );
  }

  return (
    <ScreenBase header="Timeline">
      <View style={{ alignItems: 'center', flexDirection: 'row' }}>
        <Button
          style={{ alignSelf: 'flex-end', marginLeft: 'auto', backgroundColor: colours.gold }}
          onPress={() => { return setNewPostScreen(true); }}
        >
          <Text style={{ color: colours.purple }}>
            New Post
          </Text>
        </Button>
      </View>
      {allPosts.map((item, index) => {
        return (
          <TimelinePost
            post={item}
            // Temp disable until dynamic content
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            deletePost={deletePostFromAllPosts}
            setViewPost={setViewPost}
            setCurrViewedPost={setCurrViewedPost}
          />
        );
      })}
      <View>
        <TimelinePost
          post={exampleUser}
          deletePost={deletePostFromAllPosts}
          setViewPost={setViewPost}
          setCurrViewedPost={setCurrViewedPost}
        />
        <TimelinePost
          post={exampleUser2}
          deletePost={deletePostFromAllPosts}
          setViewPost={setViewPost}
          setCurrViewedPost={setCurrViewedPost}
        />
      </View>
    </ScreenBase>
  );
};

export default Timeline;
