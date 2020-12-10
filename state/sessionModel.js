import { action, thunk } from 'easy-peasy';

const sessionInitialValues = {
  session: {
    token: null,
    tokenType: null,
  },
  user: {
    name: null,
  },
};

const sessionModel = {
  session: {
    token: null,
    tokenType: null,
  },
  user: {
    name: null,
  },

  /* Actions */
  setToken: action((state, payload) => {
    state.session.token = payload;
  }),
  setTokenType: action((state, payload) => {
    state.session.tokenType = payload;
  }),
  setUserName: action((state, payload) => {
    state.user.name = payload;
  }),

  /* Thunk */
  // login: thunk(async (actions, payload) => {
  //   // The call to the API using payload.username, payload.password
  //   // ajax or fetch
  //   // const fetchRequest = ...fetch()
  //   const fetchRequest = 'valid';
  //   const fetchReturnValues = { token: '12345' };
  //   if (fetchRequest === 'valid') {
  //     actions.setToken(fetchReturnValues.token);
  //   }
  // }),
};

export { sessionModel, sessionInitialValues };
