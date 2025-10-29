const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'poc',
    projectName: 'mfe1',
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config here
    devServer: {
      port: 8080,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
      }
    },
    externals: ['react', 'react-dom'],
  });
};