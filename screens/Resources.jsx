import {
  View,
} from 'native-base';
import React from 'react';
import Resource from '../components/Resource';
import ScreenBase from '../components/ScreenBase';

const Resources = props => {
  return (
    <ScreenBase
      header="Resources"
      padder
    >
      <View style={{ alignItems: 'stretch', justifyContent: 'center', flex: 1 }}>
        <Resource
          name="Toronto Police Service"
          textArray={[
            'For an emergency, call 9-1-1.',
            'To report a non-emergency hate crime, call the Non-Emergency Line at 808-2222.',
            'If you have questions or concerns about a hate crime, call the Hate Crime Unit at 416-808-3500 or visit on the Hate Crime Unit site here: http://www.torontopolice.on.ca/crimeprevention/hatecrime.php to learn more.',
          ]}
          onPress={() => { return props.navigation.navigate('Resources'); }}
        />

        <Resource
          name="York Regional Police"
          textArray={[
            'For an emergency, call 9-1-1.',
            'To report a non-emergency hate crime, call the Non-Emergency Line at 1-866-876-5423.',
            'If you have questions or concerns about a hate crime, call the Hate Crime Hotline at 1-877-354-4283, or email the Hate Crime Unit at hatecrime@yrp.ca.',
          ]}
          onPress={() => { return props.navigation.navigate('Resources'); }}
        />

        <Resource
          name="Durham Region Police Service"
          textArray={[
            'For an emergency, call 9-1-1.',
            'To report a non-emergency hate crime, call the Non-Emergency Line at 905-453-3311.',
          ]}
          onPress={() => { return props.navigation.navigate('Resources'); }}
        />

        <Resource
          name="Hamilton Police Service"
          textArray={[
            'For an emergency, call 9-1-1.',
            'To report a non-emergency hate crime, call the Non-Emergency Line at 905-546-4925 or call the Hate Crime Unit at 905-546-5678.',
            'If you have questions or concerns about a hate crime, call the Anti-Racism/Diversity Liaison at 905-546-4910.',
          ]}
          onPress={() => { return props.navigation.navigate('Resources'); }}
        />

        <Resource
          name="Ottawa Police Service"
          textArray={[
            'For an emergency, call 9-1-1.',
            'To report a non-emergency hate crime, call the Non-Emergency Line at 613-236-1222 ext. 7300, the Hate Crime Section at 613-236-1222 ext. 5015, or file a report at the Hate Crime Unit site here: https://www.ottawapolice.ca/en/contact-us/Online-Reporting.aspx',
          ]}
          onPress={() => { return props.navigation.navigate('Resources'); }}
        />
      </View>
    </ScreenBase>
  );
};

export default Resources;
