// // Karma configuration
var webpackConfig = require('./app/config/webpack.test');

module.exports = function (config) {
  var _config = {
    basePath: '',

    frameworks: ['jasmine'],

    files: [
      {pattern: './karma-test-shim.js', watched: false}
    ],

    preprocessors: {
      './karma-test-shim.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    webpackServer: {
      noInfo: true
    },

    //reporters: ['progress', 'kjhtml'],
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true, //<-- when false testing doesn't work' https://stackoverflow.com/questions/25199900/karma-test-runner-not-running-any-tests
    //browsers: ['Chrome'],
    browsers: ['ChromeHeadless'],
    singleRun: true
  };

  config.set(_config);
};