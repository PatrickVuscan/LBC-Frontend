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
import { colours } from '../theme/theme';

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
          <Spinner color={colours.purple} />
        )}
        {error && (
          <ErrorMessage error={error} />
        )}
        {!loading && !error && resources && (
          <Resource resourceID={resources[0]._id} />
        )}
      </View>
    </ScreenBase>
  );
};

export default Resources;
