'use strict'

const rollupConfig = Object.assign({}, require('./gulp-rollup.config'))
const shared = require('./shared')

rollupConfig.entry = rollupConfig._testEntry
rollupConfig.format = rollupConfig._testFormat
rollupConfig.plugins = rollupConfig._rollupPlugins.default
shared.cleanRollupObj(rollupConfig)

module.exports = (config) => {
  config.set({
    basePath: '.',
    autoWatch: true,
    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],
    reporters: ['progress'],
    preprocessors: {
      'src/spec.js': 'rollup'
    },
    rollupPreprocessor: rollupConfig,
    plugins: [
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-rollup-plugin'
    ],
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      { pattern: 'src/**/*.js', included: false, watched: true },
      'src/spec.js'
    ]
  })
}
