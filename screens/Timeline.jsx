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
import ScreenBase from '../components/ScreenBase';
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
    <ScreenBase header="Timeline">
      <View style={{ alignItems: 'center', flexDirection: 'row' }}>
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
          onPress={() => { return setNewPostScreen(true); }}
        >
          <Text>
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
          />
        );
      })}
      <View>
        <TimelinePost post={exampleUser} />
        <TimelinePost post={exampleUser} />
      </View>
    </ScreenBase>
  );
};

export default Timeline;
