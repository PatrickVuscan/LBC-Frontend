import React from 'react';
import { StyleSheet, View } from 'react-native';
import MiniAuthor from './MiniAuthor';
import Subtitle from './Subtitle';
import Title from './Title';

const Header = ({
  title, subtitle, authorName, authorImageURL, date,
}) => {
  return (
    <View style={styles.background}>
      <View style={styles.header}>
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
  header: {
    margin: 15,
    flexGrow: 1,
    flex: 1,
  },
  background: {
    flexGrow: 1,
    flex: 1,
    marginTop: -10,
    marginLeft: -10,
    marginRight: -10,
    backgroundColor: '#2A0053',
  },
});

export default Header;
