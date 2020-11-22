// @ts-check
import {
  Container, Content, Header, Text,
} from 'native-base';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import theme from '../theme/theme';

const ScreenBase = ({ header, children, padder = false }) => {
  return (
    <Container>
      <Header
        style={theme.appHeader}
        androidStatusBarColor="#2c3e50"
        iosBarStyle="light-content"
      >
        <Text style={theme.appHeaderText}>
          {header}
        </Text>
      </Header>
      <ScrollView
        automaticallyAdjustContentInsets
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'space-between',
        }}
      >
        <Content
          padder={padder}
          contentContainerStyle={{ flex: 1 }}
        >
          {children}
        </Content>
      </ScrollView>
    </Container>
  );
};

export default ScreenBase;
