/* eslint-disable object-shorthand */
import { StyleSheet } from 'react-native';

/* This file contains most of the styling which was more generalized across the application
   Note that not all of these are used, and some refactoring may be necessary in future to
   ensure that consistent styling is applied across the Connect screen and the other screens */

const colours = {
  purple: '#7E54C6',
  gold: '#fdb927',
};

const theme = StyleSheet.create({
  appHeader: {
    backgroundColor: 'black',
    alignItems: 'center',
  },
  appHeaderText: {
    fontSize: 20,
    fontWeight: '400',
    color: 'white',
  },
  padding: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  margin: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  card: {
    marginLeft: 20,
    marginRight: 20,
  },
  centerElement: {
    alignSelf: 'center',
  },
  centerText: {
    textAlign: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstItem: {
    marginTop: 0,
  },
  form: {
    padding: 20,
    backgroundColor: '#eee',
  },
  header: {
    fontSize: 20,
    fontWeight: '400',
  },
  spaceItem: {
    margin: 20,
  },
  footer: {
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0.2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    height: 54,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 5,
    marginBottom: 5,
  },
  verticalCenter: { alignItems: 'center' },
  sanityCardList: {
    width: '100%',
  },
});

export { theme, colours };
