// eslint-disable-next-line func-names
module.exports = api => {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
