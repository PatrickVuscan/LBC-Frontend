import React from 'react';
import {
  Linking, StyleSheet, Text,
} from 'react-native';

// This wonderful component renders a span element, i.e. text, with all the different
// stylings applied as needed to it
const Span = ({
  span, blockStyle, links, level = undefined, listItem = undefined,
}) => {
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
        <Text
          key={`${key}b`}
          style={styles.bullet}
        >
          {`${' '.repeat((level - 1) * 4 + 2)}${bulletText} `}
        </Text>
      )}
      <Text
        key={`${key}t`}
        style={style}
        onPress={url ? () => { return Linking.openURL(url); } : null}
      >
        {text}
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
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
  bullet: {
    fontSize: 20,
  },
});

export default Span;
