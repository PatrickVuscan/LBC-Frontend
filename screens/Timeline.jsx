// @ts-check
import {
  Button,
  Container,
  Text,
} from 'native-base';
import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CreatePost from '../components/CreatePost';
import ScreenBase from '../components/ScreenBase';
import TimelinePost from '../components/TimelinePost';
import ViewPost from '../components/ViewPost';
import { colours } from '../theme/theme';

const brain = require('../assets/brain.png');

// Citation: I used https://startreact.com/themes/twitter-clone-app/ as a reference for styling Timeline components

const exampleUser = {
  post_body: 'This is an example post. I am posting stuff right now! Wow!',
  username: 'Anonymous',
  post_header: 'Testing',
  anonymous: true,

};

const exampleUser2 = {
  post_body: 'Another example post. I love this app!',
  username: 'Steve',
  post_header: 'How I love this app',
  anonymous: false,
};

const url = 'https://lbc-backend-fxp5s3idfq-nn.a.run.app';

const Timeline = () => {
  const [newPostScreen, setNewPostScreen] = useState(false);
  const [allPosts, setAllPosts] = useState([]);
  const [viewPost, setViewPost] = useState(false);
  const [currViewedPost, setCurrViewedPost] = useState({
    post_body: '',
    username: '',
    post_header: '',
    anonymous: null,
    topic: '', 
    post_id: 1, 
  });

  // example api fetch that has not been tested
  /*
  fetch(`${url}/posts`)
    .then(res => { return res.json; })
    .then(data => {
      setAllPosts(data);
    });
    */
  useEffect(() => {
    fetch(`${url}/posts`)
      .then(res => { return res.json(); })
      .then(data => {
        setAllPosts(data);
      });
  }, []);

  function deletePostFromAllPosts(post) {
    const newPostsList = [...allPosts];

    newPostsList.forEach((p, index) => {
      if (p === post) {
        newPostsList.splice(index, 1);
      }
    });

    setAllPosts(newPostsList);
    // add api request to patch/delete posts, this post must be deleted from the api
  }

  // const updateCurrViewedPost = commentValue => {
  //   const newComments = currViewedPost.comments;
  //   newComments.push(['user', commentValue]);

  //   const newViewedPost = {
  //     text: currViewedPost.text,
  //     user: currViewedPost.user,
  //     title: currViewedPost.title,
  //     anon: currViewedPost.anon,
  //     comments: newComments,
  //   };

  //   setCurrViewedPost(newViewedPost);
  //   /*
  //   try {
  //     const res = fetch(
  //       url + "/posts/" + postid + "/comments",
  //       {
  //         method: 'POST',
  //         body: JSON.stringify({userid: userid, content: commentValue}),
  //       },
  //     );

  //     return res.status == 200;
  //   } catch (err) {
  //     return false;
  //   }
  //   */
  // };

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
    <ScreenBase
      left={(
        <Button
          style={{ alignSelf: 'flex-end', marginLeft: 'auto', backgroundColor: colours.gold }}
          onPress={() => { return setNewPostScreen(true); }}
        >
          <Text style={{ color: colours.purple }}>
            New Post
          </Text>
        </Button>
      )}
      header=""
      right={(
        <Button style={{ backgroundColor: colours.gold, width: 75, height: 50 }}>
          <Image
            source={brain}
            style={{ width: 60, height: 48 }}
          />
        </Button>
      )}
    >
      <ScrollView
        automaticallyAdjustContentInsets
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'space-between',
        }}
      >
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
      </ScrollView>
    </ScreenBase>
  );
};

export default Timeline;
