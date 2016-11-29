var wallabyWebpack = require('wallaby-webpack');
var webpackPostprocessor = wallabyWebpack({});

module.exports = function () {
  return {
    files: [
      { pattern: 'src/**/*.ts', load: false }
    ],
    tests: [
      { pattern: 'test/**/*.spec.ts', load: false }
    ],
    postprocessor: webpackPostprocessor,
    setup: function () {
      window.__moduleBundler.loadTests();
    }
  };
};
