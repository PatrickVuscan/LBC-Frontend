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

const ScreenBase = ({
  header = 'Default Header', children, padder = false, left = undefined, right = undefined, noHeader = false,
}) => {
  return (
    // TODO: style={{ backgroundColor: 'black' }}
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
