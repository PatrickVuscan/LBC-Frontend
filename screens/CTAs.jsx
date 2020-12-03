import { Spinner, View } from 'native-base';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { QUERY_CTAS } from '../api/queries/cta';
import CTA from '../components/CTA';
import ErrorMessage from '../components/ErrorMessage';
import ScreenBase from '../components/ScreenBase';
import client from '../sanity/client';
import { colours } from '../theme/theme';

const CTAs = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [ctas, setCtas] = useState();

  useEffect(() => {
    client.fetch(QUERY_CTAS())
      .then(res => {
        setLoading(false);
        setCtas(res);
      })
      .catch(e => {
        setError(e);
      });
  }, []);

  return (
    <ScreenBase
      header="Call To Action!"
      padder
    >
      <ScrollView
        automaticallyAdjustContentInsets
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'space-between',
        }}
      >
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
          {loading && (
            <Spinner color={colours.purple} />
          )}
          {error && (
            <ErrorMessage error={error} />
          )}
          {!loading && !error && ctas && (
            <CTA ctaID={ctas[0]._id} />
          )}
        </View>
      </ScrollView>
    </ScreenBase>
  );
};

export default CTAs;
