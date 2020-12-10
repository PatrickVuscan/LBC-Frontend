import { Alert } from 'react-native';

const createAlert = (title, msg) => {
  Alert.alert(
    title,
    msg,
    [
      {
        text: 'OK',
      },
    ],
    { cancelable: false },
  );
};

export default createAlert;
