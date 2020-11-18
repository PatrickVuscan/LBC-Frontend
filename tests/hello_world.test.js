// TODO: Import all JS files you want to test below:
// e.g. for the App.jsx file:
//          const app = require('../App');

// TODO: Group related tests together here.
describe('Test that I can run tests', () => {
  // Like setUp
  beforeAll(() => {
    console.log('I have started testing now.');
  });

  // Like tearDown
  afterAll(() => {
    console.log('I have finished testing now.');
  });

  // Insert your test cases here.
  test('A Hello World Test', () => {
    expect(1 + 1).toBe(2);
  });

  test('Another Hello World Test', () => {
    expect(1 + 1).not.toBe(3);
  });

  test('Another Hello World Test', () => {
    const array = [1, 2, 3];
    const copyOfArray = [...array];
    expect(copyOfArray).toEqual(array); // value equality
    expect(copyOfArray).not.toBe(array); // identity equality
  });
});
