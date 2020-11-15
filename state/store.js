import { createStore } from 'easy-peasy';
import { sessionModel, sessionInitialValues } from './sessionModel';
import { settingsModel, settingsInitialValues } from './settingsModel';

const model = {
  ...sessionModel,
  ...settingsModel,
};

const settings = {
  devTools: true,
  initialState: {
    ...sessionInitialValues,
    ...settingsInitialValues,
  },
};

const store = createStore(model, settings);

export default store;
