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

const NearbyResources = (props) => (
  <Container>
    <ScrollView
      automaticallyAdjustContentInsets
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'space-between',
      }}
    >
      <Header style={theme.verticalCenter}>
        <Text style={theme.header}>Resources</Text>
      </Header>
      <Content style={{ flex: 1 }}>
        <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>
            Peel Regional Police Service
            {'\n'}
          </Text>
          <Text>
            For an emergency, call 9-1-1.
            {'\n'}
          </Text>
          <Text>
            To report a non-emergency hate crime, call the Non-Emergency Line at 905-453-3311,
            or file a hate crime report here at https://www.peelpolice.ca/en/report-it/make-a-report-online.aspx.
            {'\n'}
          </Text>
          <Text>
            If you have questions or concerns about a hate crime, call the Hate-Motivated Crime
            Hotline at 905-456-5905, or visit the Hate Crime Unit site here:
            https://www.peelpolice.ca/en/report-it/hate-motivated-and-bias-motivated-crime.aspx
            to learn more.
            {'\n'}
          </Text>
          <Button>
            <Text
              onPress={() => {
                props.navigation.navigate('Resources');
              }}
            >
              Click Me!
            </Text>
          </Button>
          <Text>
            {'\n'}
          </Text>
        </View>

        <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>
            Toronto Police Service
            {'\n'}
          </Text>
          <Text>
            For an emergency, call 9-1-1.
            {'\n'}
          </Text>
          <Text>
            To report a non-emergency hate crime, call the Non-Emergency Line at 808-2222.
            {'\n'}
          </Text>
          <Text>
            If you have questions or concerns about a hate crime, call the Hate
            Crime Unit at 416-808-3500 or visit on the Hate Crime Unit site here:
            http://www.torontopolice.on.ca/crimeprevention/hatecrime.php to learn more.
            {'\n'}
          </Text>
          <Button>
            <Text
              onPress={() => {
                props.navigation.navigate('Resources');
              }}
            >
              Click Me!
            </Text>
          </Button>
          <Text>
            {'\n'}
          </Text>
        </View>

        <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>
            York Regional Police
            {'\n'}
          </Text>
          <Text>
            For an emergency, call 9-1-1.
            {'\n'}
          </Text>
          <Text>
            To report a non-emergency hate crime, call the Non-Emergency Line at 1-866-876-5423.
            {'\n'}
          </Text>
          <Text>
            If you have questions or concerns about a hate crime, call the Hate Crime
            Hotline at 1-877-354-4283, or email the Hate Crime Unit at hatecrime@yrp.ca.
            {'\n'}
          </Text>
          <Button>
            <Text
              onPress={() => {
                props.navigation.navigate('Resources');
              }}
            >
              Click Me!
            </Text>
          </Button>
          <Text>
            {'\n'}
          </Text>
        </View>

        <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>
            Durham Region Police Service
            {'\n'}
          </Text>
          <Text>
            For an emergency, call 9-1-1.
            {'\n'}
          </Text>
          <Text>
            To report a non-emergency hate crime, call the Non-Emergency Line at 905-453-3311.
            {'\n'}
          </Text>
          <Button>
            <Text
              onPress={() => {
                props.navigation.navigate('Resources');
              }}
            >
              Click Me!
            </Text>
          </Button>
          <Text>
            {'\n'}
          </Text>
        </View>

        <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>
            Hamilton Police Service
            {'\n'}
          </Text>
          <Text>
            For an emergency, call 9-1-1.
            {'\n'}
          </Text>
          <Text>
            To report a non-emergency hate crime, call the Non-Emergency Line at 905-546-4925 or
            call the Hate Crime Unit at 905-546-5678.
            {'\n'}
          </Text>
          <Text>
            If you have questions or concerns about a hate crime, call the Anti-Racism/Diversity
            Liaison at 905-546-4910.
            {'\n'}
          </Text>
          <Button>
            <Text
              onPress={() => {
                props.navigation.navigate('Resources');
              }}
            >
              Click Me!
            </Text>
          </Button>
          <Text>
            {'\n'}
          </Text>
        </View>

        <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>
            Ottawa Police Service
            {'\n'}
          </Text>
          <Text>
            For an emergency, call 9-1-1.
            {'\n'}
          </Text>
          <Text>
            To report a non-emergency hate crime, call the Non-Emergency Line at 613-236-1222
            ext. 7300, the Hate Crime Section at 613-236-1222 ext. 5015, or file a report at
            the Hate Crime Unit site here: https://www.ottawapolice.ca/en/contact-us/Online-Reporting.aspx
            {'\n'}
          </Text>
          <Button>
            <Text
              onPress={() => {
                props.navigation.navigate('Resources');
              }}
            >
              Click Me!
            </Text>
          </Button>
          <Text>
            {'\n'}
          </Text>
        </View>
      </Content>
    </ScrollView>
  </Container>
);

const styles = StyleSheet.create({});

export default NearbyResources;
