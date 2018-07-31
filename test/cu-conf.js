exports.config = {


    directConnect: true,

    //default: `--format-options '{"snippetInterface": "synchronous"}'`,

    //seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {browserName: 'chrome'},

    ignoreUncaughtExceptions: true,

    framework: 'custom',

    specs: [
        '../test/features/*.feature'
    ],

    frameworkPath: require.resolve('protractor-cucumber-framework'),

    cucumberOpts: {
        require: [
            '../test/features/step_definitions/*.js'
        ]
    },

};