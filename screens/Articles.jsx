import { useStoreActions, useStoreState } from 'easy-peasy';
import {
  Button, Container, Content, Header, Text, View,
} from 'native-base';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import theme from '../theme/theme';

const Articles = () => {
  const demoValue = useStoreState(state => state.session.demoValue);
  const increaseDemoValue = useStoreActions(actions => actions.increaseDemoValue);

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
          <Text style={theme.header}>Articles</Text>
        </Header>
        <Content
          padder
          contentContainerStyle={{ flex: 1 }}
        >
          <View style={{ alignItems: 'center' }}>
            <Button
              style={{ alignSelf: 'center' }}
              onPress={() => {
                increaseDemoValue();
              }}
            >
              <Text>
                Click Me To Test State!
              </Text>
            </Button>
            <Text>
              { demoValue }
            </Text>
          </View>
        </Content>
      </ScrollView>
    </Container>
  );
};

export default Articles;
