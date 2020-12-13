// @ts-check
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  Button,
  Container,
  Icon,
  Text,
  View,
} from 'native-base';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
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
        <Button
          transparent
          iconLeft
          onPress={() => { return navigation.openDrawer(); }}
        >
          <Icon
            name="ios-menu"
            style={{ color: colours.gold }}
          />
        </Button>
      )}
      header="Connect"
      right={(
        <Button
          transparent
          iconRight
          onPress={() => { navigation.navigate('Reach Out Categories'); }}
        >
          <MaterialCommunityIcons
            name="brain"
            size={34}
            color={colours.gold}
            style={{ paddingRight: 15 }}
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
        style={{ backgroundColor: '#eee' }}
      >
        {/* Create a post */}
        <TouchableOpacity onPress={() => { return setNewPostScreen(true); }}>
          <View style={styles.createPost}>
            <Text style={styles.createPostText}>Create a new post</Text>
          </View>
        </TouchableOpacity>

        {/* Posts */}
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

const styles = StyleSheet.create({
  createPost: {
    marginHorizontal: 10,
    marginTop: 20,
    marginBottom: 5,
    padding: 10,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: colours.gold,
    backgroundColor: colours.purple,
  },
  createPostText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Timeline;
