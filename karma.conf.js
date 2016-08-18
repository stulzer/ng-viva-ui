'use strict'

const rollupConfig = Object.assign({}, require('./gulp-rollup.config'))
const utils = require('./src/utils/utils')

rollupConfig.format = rollupConfig._testFormat
rollupConfig.plugins = rollupConfig._rollupPlugins.default
utils.cleanRollupObj(rollupConfig)

module.exports = (config) => {
  config.set({
    basePath: '.',
    autoWatch: true,
    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],
    reporters: ['progress'],
    preprocessors: {
      'src/spec.main.js': 'rollup'
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
      'src/spec.main.js'
    ]
  })
}
