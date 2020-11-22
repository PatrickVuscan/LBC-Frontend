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
    let url;
    const style = [styles.body];

    span.marks.forEach(v => {
      if (v === 'em') {
        style.push(styles.italics);
      } else if (v === 'strong') {
        style.push(styles.bold);
      } else if (links[v]) {
        url = links[v].url;
        style.push(styles.link);
      }
    });

    return (
      <Text
        key={span._key}
        style={style}
        onPress={url ? () => { return Linking.openURL(url); } : null}
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

    children.forEach(v => {
      if (v._type === 'span') {
        components.push(spanRenderer(v, links));
      } else {
        // This is an error, shouldn't happen. If you see this popup, copy and paste the string,
        // and show it to Patrick
        console.log(`encountered type other than span in blockRenderer, type: ${v._type}`);
      }
    });

    return components;
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
      } else {
        // This is an error, shouldn't happen. If you see this popup, copy and paste the string,
        // and show it to Patrick
        console.log(`encountered non block or figure in blocksRenderer, type: ${b._type}`);
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
    color: 'blue',
  },
  block: {
    margin: 10,
  },
});

export default Body;
