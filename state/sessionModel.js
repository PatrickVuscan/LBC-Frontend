import { action } from 'easy-peasy';

const sessionInitialValues = {
  session: {
    demoValue: 0,
  },
};

const sessionModel = {
  session: {
    demoValue: 0,
  },

  /* Actions */
  increaseDemoValue: action(state => {
    state.session.demoValue += 1;
  }),
};

export { sessionModel, sessionInitialValues };
