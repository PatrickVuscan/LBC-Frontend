// @ts-check
import {
  Button,
  Container,
  Content,
  Header,
  Text,
} from 'native-base';
import React, { useState } from 'react';
import { render } from 'react-dom';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import theme from '../theme/theme';
import TimelinePost from './Timeline-Components/TimelinePost';
import CreatePost from './Timeline-Components/CreatePost'; 


let exampleUser = {
  text: "This is an example post. I am posting stuff right now! Wow!",
  user: "Anonymous",
  anon: true, 

}


const Timeline = function (props){
  let [newPostScreen, setNewPostScreen] = useState(false);  
  let [allPosts, setAllPosts] = useState([]); 

  

  if (newPostScreen === true) {
    return (
      <Container>
        <CreatePost newPost = {setNewPostScreen} posts = {allPosts} setAllPosts = {setAllPosts}></CreatePost>
      </Container>
    );
  }
  else {
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
            <View style={{ flexGrow: 1, alignItems: 'center', flexDirection: "row" }}>
              <Button>
                <Text
                  onPress={() => {
                    props.navigation.navigate('Resources');
                  }}
                >
                  Click Me!
                </Text>
              </Button>
              <Button style={{alignSelf:"flex-end", marginLeft: 'auto'}} onPress = {() => setNewPostScreen(true)}>
                <Text>
                  New Post
                </Text>
              </Button>
            </View> 
            {allPosts.map((item, index) => (
                                    <TimelinePost post={item} key={index}  ></TimelinePost>
                                ))}
            <View>
              <TimelinePost post={exampleUser}></TimelinePost>
              <TimelinePost post={exampleUser}></TimelinePost>
            </View>
          </Content>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({});

export default Timeline;
