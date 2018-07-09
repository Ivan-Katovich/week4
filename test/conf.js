
exports.config = {
  //DirectConnect: true,
    seleniumAddress: 'http://localhost:4444/wd/hub',
  //onPrepare: function () {
  //   browser.ignoreSynchronization = true;
  //},

    capabilities: {
    'browserName': 'chrome'
  },

    framework: 'jasmine',

    specs: ['test/spec/spec.js'],

    jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
