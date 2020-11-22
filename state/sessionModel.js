import { action, thunk } from 'easy-peasy';

const sessionInitialValues = {
  session: {
    token: null,
  },
};

const sessionModel = {
  session: {
    token: null,
  },

  /* Actions */
  setToken: action((state, payload) => {
    state.session.token = payload;
  }),

  /* Thunk */
  login: thunk(async (actions, payload) => {
    // The call to the API using payload.username, payload.password
    // ajax or fetch
    // const fetchRequest = ...fetch()
    const fetchRequest = 'valid';
    const fetchReturnValues = { token: '12345' };
    if (fetchRequest === 'valid') {
      actions.setToken(fetchReturnValues.token);
    }
  }),
};

export { sessionModel, sessionInitialValues };
