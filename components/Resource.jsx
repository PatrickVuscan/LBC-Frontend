import {
  Body,
  Button,
  Card,
  CardItem,
  Text,
  View,
} from 'native-base';
import React from 'react';

const Resource = props => {
  const { name, textArray, onPress } = props;
  return (
    <View
      style={{
        alignItems: 'stretch',
        marginHorizontal: 10,
        marginVertical: 25,
      }}
    >
      <Card>
        <CardItem
          header
          bordered
          key="ResourceTitle"
        >
          <Text>
            {name}
          </Text>
        </CardItem>

        <CardItem
          bordered
          key="ResourceBody"
        >
          <Body>
            {textArray && textArray.map((block, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Text key={index}>
                {block}
                {'\n'}
              </Text>
            ))}
          </Body>
        </CardItem>

        <CardItem
          footer
          key="ResourceButton"
        >
          <Button>
            <Text onPress={onPress}>
              Click Me!
            </Text>
          </Button>
        </CardItem>

      </Card>
    </View>
  );
};

export default Resource;
