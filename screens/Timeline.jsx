// @ts-check
import {
  Button,
  Container,
  Icon,
  Text,
} from 'native-base';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CreatePost from '../components/CreatePost';
import ScreenBase from '../components/ScreenBase';
import TimelinePost from '../components/TimelinePost';
import ViewPost from '../components/ViewPost';
import { colours } from '../theme/theme';

// Citation: I used https://startreact.com/themes/twitter-clone-app/ as a reference for styling Timeline components

// This is the current backend URL
const url = 'https://lbc-backend-fxp5s3idfq-nn.a.run.app';

const Timeline = ({ navigation, route }) => {
  // Determines whether you're on the create post screen or not
  const [newPostScreen, setNewPostScreen] = useState(false);
  const [allPosts, setAllPosts] = useState([]);
  const [viewPost, setViewPost] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState({ username: 'user' });
  const [currViewedPost, setCurrViewedPost] = useState({
    post_body: '',
    username: '',
    post_header: '',
    anonymous: null,
    topic: '',
    post_id: 1,
  });
  const [refreshPostToggle, setRefreshPostToggle] = useState(false);

  const toggleRefresh = () => {
    setRefreshPostToggle(!refreshPostToggle);
  };

  // On load, we get all the data about the user, to use for posts
  useEffect(() => {
    fetch(`${url}/users/me`, { headers: { Authorization: `${route.params.tokenType} ${route.params.accessToken}` } })
      .then(res => { return res.json(); })
      .then(data => {
        setLoggedInUser(data);
      });
  }, [route.params.accessToken, route.params.tokenType]);

  // Get posts, taking into account if you're on All posts, or only "My Posts"
  useEffect(() => {
    // If you're on the "My Posts" page, then we only display the users own posts
    if (route.params.myposts) {
      fetch(`${url}/posts/user/${loggedInUser.username}`)
        .then(res => { return res.json(); })
        .then(data => {
          setAllPosts(data);
        });
    } else {
      fetch(`${url}/posts/recent/0`)
        .then(res => { return res.json(); })
        .then(data => {
          setAllPosts(data);
        });
    }
  }, [route.params.myposts, loggedInUser.username, refreshPostToggle]);

  function deletePostFromAllPosts(post) {
    /*
    const newPostsList = [...allPosts];

    newPostsList.forEach((p, index) => {
      if (p === post) {
        newPostsList.splice(index, 1);
      }
    });

    setAllPosts(newPostsList);
    */
    toggleRefresh();

    try {
      fetch(
        `https://lbc-backend-fxp5s3idfq-nn.a.run.app/posts/${post.post_id}`,
        {
          method: 'DELETE',
          body: JSON.stringify({ username: post.username }),
        },
      );
    } catch (err) {
      console.log(err);
    }
  }

  // If creating a new post, return the Create Post screen
  if (newPostScreen) {
    return (
      <Container>
        <CreatePost
          newPost={() => {
            setNewPostScreen(false);
            toggleRefresh();
          }}
          posts={allPosts}
          setAllPosts={setAllPosts}
          loggedInUser={loggedInUser}
        />
      </Container>
    );
  }

  // If looking at a post, return the View Post screen
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
        <View>
          <Button
            transparent
            onPress={() => { return navigation.openDrawer(); }}
          >
            <Icon
              style={{ color: colours.gold }}
              name="ios-menu"
            />
          </Button>
        </View>
      )}
      header=""
      right={(
        <Button
          style={{ alignSelf: 'flex-end', marginLeft: 'auto', backgroundColor: colours.gold }}
          onPress={() => { return setNewPostScreen(true); }}
        >
          <Text style={{ color: colours.purple }}>
            New Post
          </Text>
        </Button>
      )}
    >
      <ScrollView
        automaticallyAdjustContentInsets
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'space-between',
        }}
        style={{ backgroundColor: '#eee' }}
      >
        {/*
        <Button style={{ backgroundColor: colours.gold, width: 75, height: 50 }}>
          <Image
            source={brain}
            style={{ width: 60, height: 48 }}
          />
        </Button>
      */}
        {allPosts.map(item => {
          return (
            <TimelinePost
              post={item}
              key={item.post_id}
              deletePost={deletePostFromAllPosts}
              setViewPost={setViewPost}
              setCurrViewedPost={setCurrViewedPost}
              loggedInUser={loggedInUser}
            />
          );
        })}
      </ScrollView>
    </ScreenBase>
  );
};

export default Timeline;
