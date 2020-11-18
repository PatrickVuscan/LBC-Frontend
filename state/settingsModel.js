import {
  action, computed, debug, thunk,
} from 'easy-peasy';

const settingsInitialValues = {
  settings: {
    user: null,
  },
};

// If you want to console.log inside of this, note that you must wrap the state with debug()
const settingsModel = {
  settings: {
    user: null,
  },
  // example of a computed property!
  // note that you cannot have this inside the above settings obj, because its defined in
  // state.settings, and its definition is based off of state.settings as well.
  // This means that as state.settings is being defined, it needs to already exist for the sake of
  // defining loggedIn. Basically a circular dependency. Sadly no nicer way to handle this :/
  loggedIn: computed(state => state.settings.user != null),

  /* Actions */
  updateUser: action((state, payload) => {
    console.log('current store', debug(state));
    state.settings.user = payload;
  }),

  /* Thunks */
  login: thunk(async (actions, payload) => {
    // Some request for logging in? using payload
    console.log('Login payload', debug(payload));
    const requestValid = true;
    if (requestValid) {
      actions.updateUser('testUsername');
    }
  }),
};

export { settingsModel, settingsInitialValues };
