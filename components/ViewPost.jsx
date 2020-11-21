import {
    Button,
    Container,
    Header,
    Icon, Input, Text,
  } from 'native-base';
import React, {useState, useRef, useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import theme from '../theme/theme';


export default ViewPost = props => {
    const [commentInput, setCommentInput] = useState(""); 
    const [comments, setComments] = useState(props.post.comments); 

    function addComment() {
        setComments(comments => ([...comments,["user", commentInput]])); 
        let a = props.post.comments;
        a.push(["user", commentInput]); 
        props.post.comments = a; 
    }

    function handleInputChange(input) {
        setCommentInput(input); 
    }

    return(
        <Container>
            <ScrollView>
                <Header style={{ alignItems: 'center' }}>
                    <Button
                        onPress={() => props.setViewPost(false)}
                        transparent
                        style={{ alignSelf: 'center', float: 'left' }}
                    >
                        <Icon
                        name="close"
                        style={{ flexDirection: 'row', float: 'left' }}
                        />
                    </Button>
                    <Text
                        style={{
                        color: 'white', fontSize: 20, marginLeft: 'auto', marginRight: 20,
                        }}
                    >
                        Post Title
                    </Text>
                </Header>
                <View
                style={{
                    flex: 1,
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    width: '100%',
                    minHeight: 350, 
                    borderBottomColor: '#bbb',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }}
                >
                    <Text
                        style={{
                            flex: 1,
                            width: '100%',
                            fontSize: 24,
                            alignContent: 'flex-start',
                            justifyContent: 'flex-start',
                            textAlignVertical: 'top',
                            margin: 5,
                        }}
                    >
                        {props.post.text}
                    </Text>
                </View>
                <Header>
                    <Text 
                        style={{color: 'white', fontSize: 19, alignSelf:"center"}}>
                        Comments
                    </Text>
                </Header>
                <View style={{flexDirection: 'row'}}>
                    
                    <Input placeholder="Write a comment" onChangeText={handleInputChange}></Input>
                    <Button onPress={addComment}>
                        <Text>Post Comment</Text>
                    </Button>
                </View>
                <View>
                    {comments.map((item, index) => (
                        <View style={{padding: 14}}>
                            <Text style={{fontSize: 18}}key={index}>{item[0]}: {item[1]}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </Container>
    );
}


