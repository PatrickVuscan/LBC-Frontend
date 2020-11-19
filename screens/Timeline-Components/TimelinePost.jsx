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
    let headerColor = '#3D6DCC';
    if (this.props.post.user == 'user') {
        headerColor = 'green'; 
    }
    return(
      <Container style={styles.postContainer}>
        <Header style={{backgroundColor: headerColor}}>
          <Left>
            <Text style = {{color: "white"}}>{this.props.post.user}</Text>
          </Left>
          <Right>
            <Text style ={{color: "white"}}>Title of Post</Text>
          </Right>
        </Header>
        <Content contentContainerStyle={{justifyContent: 'space-between'}} style={{backgroundColor: "white"}}>
        <Text style={{marginTop: 10, fontSize: 18, color: "#555"}}>{this.props.post.text}</Text>
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
    