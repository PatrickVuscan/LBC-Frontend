import {
    Button,
    Container,
    Content,
    Header,
    Text,
    Left,
    Right,
    Input, 
    Icon
  } from 'native-base';
  import React from 'react';
  import { StyleSheet, View } from 'react-native';
import { color } from 'react-native-reanimated';
  import theme from '../../theme/theme';

  export default class CreatePost extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            postText: "",
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    changeAnonColor = () => {

    }

    savePost = () => {
        let newPostContent = {
            text: this.state.postText, 
            anon: false,
            user: "user"
        }

        let a = this.props.posts; 
        a.unshift(newPostContent);
        this.props.setAllPosts(a); 

        this.props.newPost(false);

    }

    handleInputChange = (input) => {
        this.setState({postText: input});
    }

    render() {
        return (
            <Container>
                <Header style={{alignItems:"center"}}>
                    <Button onPress={() => this.props.newPost(false)} transparent style={{alignSelf: "flex-start", alignSelf: "center", float: "left"}}>
                        <Icon name="close" style = {{flexDirection: "row", float:"left"}}></Icon>
                    </Button>
                    <Text style={{color:"white", fontSize: 20, marginLeft:"auto", marginRight: 20}}>Write up your new post!</Text>
                </Header>
                <View
                style={{
                flex: 1,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                width: "100%"
                }}
                >
                    <Input
                    style={{
                        flex: 1,
                        width: "100%",
                        fontSize: 24,
                        alignContent: "flex-start",
                        justifyContent: "flex-start",
                        textAlignVertical: "top",
                        margin: 5
                    }}
                    multiline
                    placeholder="What's happening?"
                    onChangeText={this.handleInputChange}
                    />
                </View>
                <View style={theme.footer}>
                    <Button
                    rounded
                    style={{ color: "#4286f4", height: 40, width: 135, justifyContent: "center" }}
                    >
                        <Text style={{ color: "white"}}>Anonymous</Text>
                    </Button>
                    <Button
                    rounded
                    style={{ color: "#4286f4", height: 40, width: 94, marginLeft: 'auto', justifyContent: "center"}}
                    onPress ={this.savePost}
                    >
                        <Text style={{ color: "white", textAlign: "center"}}>Post</Text>
                    </Button>
                </View>
                
                

            </Container>
        );
    }

  }