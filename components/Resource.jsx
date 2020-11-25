import {
  Spinner,
} from 'native-base';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { QUERY_RESOURCE } from '../api/queries/resource';
import client from '../sanity/client';
import Body from './Body';
import CaptionedImage from './CaptionedImage';
import ErrorMessage from './ErrorMessage';
import ResourceHeader from './ResourceHeader';

const Resource = ({ resourceID }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [resource, setResource] = useState({});

  const {
    _id: id,
    name,
    subname,
    phoneNumber,
    email,
    mainImageAlt,
    mainImageCaption,
    mainImageURL,
    body,
  } = resource;

  useEffect(() => {
    !loading && setLoading(true);
    error && setError(false);
    client.fetch(QUERY_RESOURCE, { id: resourceID })
      .then(res => {
        setLoading(false);
        setResource(res[0]);
      })
      .catch(e => {
        setError(e);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resourceID]);

  return (
    <View
      // style={{
      //   alignItems: 'stretch',
      //   marginVertical: 15,
      // }}
      style={styles.outerContainer}
    >
      {loading && (
        <Spinner color="purple" />
      )}
      {error && (
        <ErrorMessage error={error} />
      )}
      {!loading && !error && (
        <>
          <ResourceHeader
            name={name}
            subname={subname}
            phoneNumber={phoneNumber}
            email={email}
          />
          <CaptionedImage
            key={id}
            caption={mainImageCaption}
            alt={mainImageAlt}
            url={mainImageURL}
          />
          <Body body={body} />
        </>
      )}
      {/* <Card>
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
            {textArray && textArray.map((block, index) => {
              return (
              // eslint-disable-next-line react/no-array-index-key
                <Text key={index}>
                  {block}
                  {'\n'}
                </Text>
              );
            })}
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

      </Card> */}
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    flexGrow: 1,
  },
});

export default Resource;
