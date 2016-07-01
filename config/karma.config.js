const webpackConfig = require('./webpack.test');
const helpers = require('./helpers');

module.exports = function(config) {
    config.set({
        basePath: helpers.root(),

        frameworks: ['mocha', 'chai', 'sinon'],

        reporters: ['spec', 'coverage'],

        files: [
            'config/spec-bundle.js'
        ],

        exclude: [],

        preprocessors: {
            'config/spec-bundle.js': ['webpack', 'sourcemap']
        },

        coverageReporter: {
            dir : 'reports/coverage',
            reporters: [
                {type: 'html', subdir: '/html'},
                {type: 'lcov', subdir: '/lcov'},
                {type: 'cobertura', subdir: '/cobertura'},
                {type: 'text-summary'}
            ]
        },

        colors: true,

        logLevel: config.LOG_DISABLE,

        autoWatch: true,

        browsers: ['PhantomJS'],

        singleRun: true,

        webpack: webpackConfig,

        webpackMiddleware: {
            noInfo: 'errors-only'
        }
    });
};
