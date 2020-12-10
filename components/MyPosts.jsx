import { ScrollView } from 'react-native-gesture-handler';
import {
  Button,
  Container,
  Text,
} from 'native-base';
import React, { useEffect, useState } from 'react';
import TimelinePost from './TimelinePost';
import ViewPost from './ViewPost';

const url = 'https://lbc-backend-fxp5s3idfq-nn.a.run.app';
// This page will be for notifications/user's posts
const MyPosts = (props) => {
  const [allPosts, setAllPosts] = useState([]);
  const [viewPost, setViewPost] = useState(false); 

  useEffect(() => {
    fetch(`${url}/posts/user/user`)
      .then(res => { return res.json(); })
      .then(data => {
        setAllPosts(data);
      });
  });


  return (
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
            setViewPost={setViewPost}
          />
        );
      })}
    </ScrollView>
  );
};

export default MyPosts;
