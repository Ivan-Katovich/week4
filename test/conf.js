exports.config = {
  directConnect: true,

  capabilities: {
    'browserName': 'chrome'
  },

  framework: 'jasmine',

  specs: ['../test/spec/spec.js'],

  jasmineNodeOpts: {
  defaultTimeoutInterval: 30000
  }
};
