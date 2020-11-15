// @ts-check
import {
  Button,
  Container,
  Content,
  Header,
  Text,
  Left,
  Right,
  Icon
} from 'native-base';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import theme from '../../theme/theme';



export default class TimelinePost extends React.Component {
  constructor(props) {
    super(props); 
  }

  render() {
    return(
      <Container style={styles.postContainer}>
        <Header >
          <Left>
            <Text style = {{color: "white"}}>Anonymous</Text>
          </Left>
          <Right>
            <Text style ={{color: "white"}}>Title of Post</Text>
          </Right>
        </Header>
        <Content contentContainerStyle={{justifyContent: 'space-between'}} style={{backgroundColor: "white"}}>
          <Text style={{marginTop: 10, fontSize: 18, color: "#555"}}>This is an example post. I am posting stuff right now! Wow!</Text>
        </Content>
        <View style={{ padding: 0, flexDirection: "row", alignItems: "flex-end"}}>
            <Button transparent>
              <Icon name="ios-chatboxes" style = {{flexDirection: "row"}}></Icon>
            </Button>
            <Button transparent style={{flexDirection: "row", marginLeft: 'auto'}}>
              <Icon name="heart" style = {{alignItems: 'center', }}></Icon>
            </Button>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  postContainer: {
    paddingTop: 20,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    height: 250,
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "column",
  }
})
    