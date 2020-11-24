import React from 'react';
import {
  Linking, StyleSheet, Text, View,
} from 'react-native';
import CaptionedImage from './CaptionedImage';

// This wonderful component renders a simple figure/image, with alt text and a caption
const figureRenderer = figure => {
  const {
    _key: key, alt, caption, url,
  } = figure;

  return (
    <CaptionedImage
      key={key}
      url={url}
      alt={alt}
      caption={caption}
    />
  );
};

// This wonderful component renders a span element, i.e. text, with all the different
// stylings applied as needed to it
const spanRenderer = (span, blockStyle, links, level = undefined, listItem = undefined) => {
  let url;
  let bulletText;
  const style = [styles.body];
  const {
    marks, text, _key: key,
  } = span;

  if (blockStyle.toLowerCase() === 'h1') {
    style.push(styles.H1);
  } else if (blockStyle.toLowerCase() === 'h2') {
    style.push(styles.H2);
  } else if (blockStyle.toLowerCase() === 'h3') {
    style.push(styles.H3);
  } else if (blockStyle.toLowerCase() === 'h4') {
    style.push(styles.H4);
  } else if (blockStyle.toLowerCase() === 'blockquote') {
    style.push(styles.quote);
  }

  marks.forEach(v => {
    if (v === 'em') {
      style.push(styles.italics);
    } else if (v === 'strong') {
      style.push(styles.bold);
    } else if (links[v]) {
      url = links[v].url;
      style.push(styles.link);
    }
  });

  if (level && listItem) {
    switch (level) {
    case 1:
      bulletText = '\u2022\uFE0E';
      break;
    case 2:
      bulletText = '\u25E6\uFE0E';
      break;
    case 3:
      bulletText = '\u2022\uFE0E';
      break;
    default:
      bulletText = '\u25E6\uFE0E';
    }
  }

  return (
    <>
      {bulletText && (
        <Text style={styles.bullet}>
          {`${' '.repeat((level - 1) * 4 + 2)}${bulletText} `}
        </Text>
      )}
      <Text
        key={key}
        style={style}
        onPress={url ? () => { return Linking.openURL(url); } : null}
      >
        {text}
      </Text>
    </>
  );
};

// This wonderful hunk of code takes a block from the body array, and loops
// through the children, rendering the inner spans
const blockRenderer = block => {
  const {
    children, markDefs, style, level, listItem,
  } = block;
  const components = [];
  const links = {};

  // Go through markDefs and map each link
  markDefs && markDefs.forEach(v => {
    links[v._key] = { type: v._type, url: v.href };
  });

  children.forEach(v => {
    if (v._type === 'span') {
      components.push(spanRenderer(v, style, links, level, listItem));
    } else {
      // This is an error, shouldn't happen. If you see this popup, copy and paste the string,
      // and show it to Patrick
      console.log(`encountered type other than span in blockRenderer, type: ${v._type}`);
    }
  });

  return components;
};

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
                key={b._key}
                style={styles.block}
              >
                {blockRenderer(b)}
              </Text>
            ) : (
              <View style={styles.quoteContainer}>
                {blockRenderer(b)}
              </View>
            ),
        );
      } else if (b._type === 'figure') {
        allComponents.push(
          figureRenderer(b),
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
