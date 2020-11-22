import React from 'react';
import { StyleSheet, View } from 'react-native';
import MiniAuthor from './MiniAuthor';
import Subtitle from './Subtitle';
import Title from './Title';

const Header = ({
  title, subtitle, authorName, authorImageURL, date,
}) => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <Title title={title} />
        <Subtitle subtitle={subtitle} />
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
  //
  innerContainer: {
    marginHorizontal: 25,
    marginVertical: 15,
  },
  // Used for providing background color
  outerContainer: {
    margin: -10,
    backgroundColor: '#2A0053',
  },
});

export default Header;
