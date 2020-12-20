import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colours } from '../theme/theme';
import MiniAuthor from './MiniAuthor';
import Subtitle from './Subtitle';
import Title from './Title';

// Inside of content like articles or resources from Sanity, this will render the header
// Title and subtitle get rendered in the first componentes, and MiniAuthor handles the
// Author image and date of posting
const Header = ({
  title, subtitle, authorName, authorImageURL, date,
}) => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <Title title={title} />
        {subtitle && (<Subtitle subtitle={subtitle} />)}
        <MiniAuthor
          name={authorName}
          url={authorImageURL}
          date={date}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
  // Used for providing background color
  outerContainer: {
    backgroundColor: colours.purple,
  },
});

export default Header;
