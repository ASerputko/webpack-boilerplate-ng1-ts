var helpers = require('./helpers');

exports.config = {

    baseUrl: 'http://localhost:3000',

    specs: [
        helpers.root('src/**/*.e2e.ts')
    ],
    exclude: [],

    framework: 'mocha',

    allScriptsTimeout: 110000,

    mochaOpts: {
        reporter: 'spec',
        slow: 5000
    },

    directConnect: true,

    capabilities: {
        'browserName': 'chrome',
        'idleTimeout': 6000
    },

    onPrepare: function() {
        // browser.ignoreSynchronization = true;
    }
};
