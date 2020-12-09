import { ScrollView } from 'react-native-gesture-handler';
import {
  Button,
  Container,
  Text,
} from 'native-base';
import React, { useState } from 'react';
import TimelinePost from './TimelinePost';
import ViewPost from './ViewPost';

// This page will be for notifications/user's posts
const myPosts = () => {
  // pull users's posts from database
  return (
    <ScrollView
      automaticallyAdjustContentInsets
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'space-between',
      }}
    >
      {/* }
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
    < */}
    </ScrollView>
  );
};

export default myPosts;
