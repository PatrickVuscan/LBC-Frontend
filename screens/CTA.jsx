// @ts-check
import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'native-base';
import ScreenBase from '../components/ScreenBase';

const CTA = () => {
  return (
    <ScreenBase
      header="Call To Action!"
      padder
    >
      <View>
        <Text>
          Working!
        </Text>
      </View>
    </ScreenBase>
  );
};

const styles = StyleSheet.create({});

export default CTA;
