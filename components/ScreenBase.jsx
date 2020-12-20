// @ts-check
import {
  Body,
  Container,
  Content,
  Header,
  Left,
  Right,
  Text,
} from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { theme } from '../theme/theme';

// Because Native Base gives us these components which we used a bunch, we have this,
// but it might be possible to refactor and remove this eventually...we're not sure
// if its worth keeping anymore.Sort of an artificat at this point
const ScreenBase = ({
  header = 'Default Header',
  scrollEnabled = false,
  children,
  padder = false,
  left = undefined,
  right = undefined,
  noHeader = false,
}) => {
  return (
    <Container>
      {!noHeader && (
        <Header
          style={theme.appHeader}
          androidStatusBarColor="#2c3e50"
          iosBarStyle="light-content"
        >
          <Left style={styles.flex}>
            {left}
          </Left>
          <Body style={styles.flex}>
            <Text style={theme.appHeaderText}>
              {header}
            </Text>
          </Body>
          <Right style={styles.flex}>
            {right}
          </Right>
        </Header>
      )}
      <Content
        scrollEnabled={scrollEnabled}
        padder={padder}
        contentContainerStyle={{ flex: 1 }}
      >
        {children}
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export default ScreenBase;
