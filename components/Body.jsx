import React from 'react';
import {
  Linking, StyleSheet, Text, View,
} from 'react-native';
import CaptionedImage from './CaptionedImage';

const Body = ({ bodyRaw }) => {
  const figureRenderer = figure => {
    return (
      <CaptionedImage
        key={figure._key}
        url={figure.asset.url}
        alt={figure.alt}
        caption={figure.caption}
      />
    );
  };

  const spanRenderer = (span, links) => {
    let link;
    const style = [styles.body];

    span.marks.forEach(v => {
      if (v === 'link') {
        link = v;
        style.push(styles.link);
      } else if (v === 'em') {
        style.push(styles.italics);
      } else if (v === 'strong') {
        style.push(styles.bold);
      }
    });

    return (
      <Text
        key={span._key}
        style={style}
        onPress={link ? () => { return Linking.openURL(links[link]); } : null}
      >
        {span.text}
      </Text>
    );
  };

  const blockRenderer = block => {
    const { markDefs, children } = block;
    const components = [];
    const links = {};

    markDefs && markDefs.forEach(v => {
      links[v._key] = { type: v._type, url: v.href };
    });

    if (block._type === 'block') {
      children.forEach(v => {
        if (v._type === 'span') {
          components.push(spanRenderer(v, links));
        } else {
          console.log(`encountered another type of block: ${v._type}`);
        }
      });

      return components;
    }
    console.log(`encountered non block type: ${block._type}`);
  };

  const blocksRenderer = blocks => {
    const allComponents = [];
    blocks.forEach(b => {
      if (b._type === 'block') {
        allComponents.push(
          <Text
            key={b._key}
            style={styles.block}
          >
            {blockRenderer(b)}
          </Text>,
        );
      } else if (b._type === 'figure') {
        allComponents.push(
          figureRenderer(b),
        );
      }
    });

    return allComponents;
  };

  return (
    <View style={styles.container}>
      {bodyRaw && blocksRenderer(bodyRaw)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    fontSize: 20,
    color: 'blue',
  },
  block: {
    margin: 10,
  },
});

export default Body;
