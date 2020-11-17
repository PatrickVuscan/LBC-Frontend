import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Header,
  Text,
  View,
} from 'native-base';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import theme from '../theme/theme';

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
            {textArray && textArray.map(block => (
              <Text>
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

const NearbyResources = props => (
  <Container>
    <ScrollView
      automaticallyAdjustContentInsets
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'space-between',
      }}
    >
      <Header style={theme.verticalCenter}>
        <Body>
          <Text style={theme.header}>Resources</Text>
        </Body>
      </Header>
      <Content style={{ flex: 1 }}>
        <Resource
          name="Toronto Police Service"
          textArray={[
            'For an emergency, call 9-1-1.',
            'To report a non-emergency hate crime, call the Non-Emergency Line at 808-2222.',
            'If you have questions or concerns about a hate crime, call the Hate Crime Unit at 416-808-3500 or visit on the Hate Crime Unit site here: http://www.torontopolice.on.ca/crimeprevention/hatecrime.php to learn more.',
          ]}
          onPress={() => props.navigation.navigate('Resources')}
        />

        <Resource
          name="York Regional Police"
          textArray={[
            'For an emergency, call 9-1-1.',
            'To report a non-emergency hate crime, call the Non-Emergency Line at 1-866-876-5423.',
            'If you have questions or concerns about a hate crime, call the Hate Crime Hotline at 1-877-354-4283, or email the Hate Crime Unit at hatecrime@yrp.ca.',
          ]}
          onPress={() => props.navigation.navigate('Resources')}
        />

        <Resource
          name="Durham Region Police Service"
          textArray={[
            'For an emergency, call 9-1-1.',
            'To report a non-emergency hate crime, call the Non-Emergency Line at 905-453-3311.',
          ]}
          onPress={() => props.navigation.navigate('Resources')}
        />

        <Resource
          name="Hamilton Police Service"
          textArray={[
            'For an emergency, call 9-1-1.',
            'To report a non-emergency hate crime, call the Non-Emergency Line at 905-546-4925 or call the Hate Crime Unit at 905-546-5678.',
            'If you have questions or concerns about a hate crime, call the Anti-Racism/Diversity Liaison at 905-546-4910.',
          ]}
          onPress={() => props.navigation.navigate('Resources')}
        />

        <Resource
          name="Ottawa Police Service"
          textArray={[
            'For an emergency, call 9-1-1.',
            'To report a non-emergency hate crime, call the Non-Emergency Line at 613-236-1222 ext. 7300, the Hate Crime Section at 613-236-1222 ext. 5015, or file a report at the Hate Crime Unit site here: https://www.ottawapolice.ca/en/contact-us/Online-Reporting.aspx',
          ]}
          onPress={() => props.navigation.navigate('Resources')}
        />
      </Content>
    </ScrollView>
  </Container>
);

export default NearbyResources;
