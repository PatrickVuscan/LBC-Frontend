import {
  Spinner,
  View,
} from 'native-base';
import React, { useEffect, useState } from 'react';
import { QUERY_RESOURCES } from '../api/queries/resource';
import ErrorMessage from '../components/ErrorMessage';
import Resource from '../components/Resource';
import ScreenBase from '../components/ScreenBase';
import client from '../sanity/client';

const Resources = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [resources, setResources] = useState();

  useEffect(() => {
    client.fetch(QUERY_RESOURCES())
      .then(res => {
        setLoading(false);
        setResources(res);
      })
      .catch(e => {
        setError(e);
      });
  }, []);

  return (
    <ScreenBase
      header="Resources"
      padder
    >
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        {loading && (
          <Spinner color="purple" />
        )}
        {error && (
          <ErrorMessage error={error} />
        )}
        {!loading && !error && resources && (
          <Resource resourceID={resources[0]._id} />
        )}
        {/* <Resource
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
        /> */}
      </View>
    </ScreenBase>
  );
};

export default Resources;
