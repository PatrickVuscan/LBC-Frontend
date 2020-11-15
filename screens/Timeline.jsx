// @ts-check
import {
  Button,
  Container,
  Content,
  Header,
  Text,
} from 'native-base';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import theme from '../theme/theme';

const Timeline = props => (
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
        <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button>
            <Text
              onPress={() => {
                props.navigation.navigate('Resources');
              }}
            >
              Click Me!
            </Text>
          </Button>
        </View>
      </Content>
    </ScrollView>
  </Container>
);

const styles = StyleSheet.create({});

export default Timeline;
