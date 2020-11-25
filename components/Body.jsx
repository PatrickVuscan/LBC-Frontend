import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Block from './Block';
import CaptionedImage from './CaptionedImage';

// This is the actual Body Component, which renders the body of an article or cta, or blahblahblah
const Body = ({ body }) => {
  const bodyRenderer = blocks => {
    const allComponents = [];
    blocks.forEach(b => {
      if (b._type === 'block') {
        allComponents.push(
          b.style.toLowerCase() !== 'blockquote'
            ? (
              <Text
                key={`${b._key}t`}
                style={styles.block}
              >
                <Block
                  key={`${b._key}b`}
                  blockChildren={b.children}
                  markDefs={b.markDefs}
                  style={b.style}
                  level={b.level}
                  listItem={b.listItem}
                />
              </Text>
            ) : (
              <View
                key={`${b._key}t`}
                style={styles.quoteContainer}
              >
                <Block
                  id={`${b._key}b`}
                  blockChildren={b.children}
                  markDefs={b.markDefs}
                  style={b.style}
                  level={b.level}
                  listItem={b.listItem}
                />
              </View>
            ),
        );
      } else if (b._type === 'figure') {
        allComponents.push(
          <CaptionedImage
            key={b._key}
            url={b.url}
            alt={b.alt}
            caption={b.caption}
          />,
        );
      } else {
        // This is an error, shouldn't happen. If you see this popup, copy and paste the string,
        // and show it to Patrick
        console.log(`encountered non block or figure in bodyRenderer, type: ${b._type}`);
      }
    });

    return allComponents;
  };

  return (
    <View style={styles.container}>
      {body && bodyRenderer(body)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  H1: {
    fontSize: 40,
  },
  H2: {
    fontSize: 32,
  },
  H3: {
    fontSize: 28,
  },
  H4: {
    fontSize: 24,
  },
  quote: {
    color: '#555',
    fontStyle: 'italic',
    padding: 15,
  },
  quoteContainer: {
    backgroundColor: 'lightgray',
    margin: 10,
    borderRadius: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  italics: {
    fontStyle: 'italic',
  },
  body: {
    fontSize: 16,
  },
  link: {
    color: 'blue',
  },
  block: {
    margin: 10,
  },
  bullet: {
    fontSize: 20,
  },
});

export default Body;
