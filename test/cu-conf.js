exports.config = {

    default: `--format-options '{"snippetInterface": "synchronous"}'`,

    //seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {browserName: 'chrome'},

    baseUrl: 'http://178.124.206.54/',

    ignoreUncaughtExceptions: true,

    framework: 'cucumber',

    specs: [
        'features/*.feature'
    ],

    cucumberOpts: {
        require: [
            'step_definitions/*.js'
        ]
    },

};