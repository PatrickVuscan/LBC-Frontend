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
import theme from '../theme/theme';

const exampleUser = {
  text: 'This is an example post. I am posting stuff right now! Wow!',
  user: 'Anonymous',
  anon: true,

};

const Timeline = props => {
  const [newPostScreen, setNewPostScreen] = useState(false);
  const [allPosts, setAllPosts] = useState([]);

  function deletePostFromAllPosts(post) {
    let newPostsList = []; 
    for(let p of allPosts) {
      if(p !== post) {
        newPostsList.push(p); 
      }
    }
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
              deletePost = {deletePostFromAllPosts}
            />
          ))}
          <View>
            <TimelinePost post={exampleUser} deletePost = {deletePostFromAllPosts}/>
            <TimelinePost post={exampleUser} deletePost = {deletePostFromAllPosts}/>
          </View>
        </Content>
      </ScrollView>
    </Container>
  );
};

export default Timeline;
