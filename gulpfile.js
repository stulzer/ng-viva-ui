'use strict'

const argv = require('yargs').argv
const connect = require('gulp-connect')
const del = require('del')
const gulp = require('gulp')
const gulpUtil = require('gulp-util')
const ngdocs = require('gulp-ngdocs')
const mergeStream = require('merge-stream')
const path = require('path')
const rollup = require('rollup-stream')
const Server = require('karma').Server
const source = require('vinyl-source-stream')
const standard = require('gulp-standard')
const vinylPaths = require('vinyl-paths')

const rollupConfig = require('./gulp-rollup.config')
const utils = require('./src/utils/utils')
const shared = require('./shared')

function rollupRun (config, isProduction, dest) {
  config = Object.assign({}, config)

  const moduleName = config.moduleName
  const _rollupPlugins = config._rollupPlugins
  const _entry = config._entry

  const fileName = moduleName + (_entry.name ? `.${_entry.name}` : '')
  config.moduleName = moduleName + (() => {
    const name = _entry.name
    return name ? utils.camelize(name.replace(/\./g, '-'), {capitalize: true}) : ''
  })()

  config.entry = _entry.pattern
  config.plugins = _rollupPlugins.default

  if (isProduction) {
    config.plugins = config.plugins.concat(_rollupPlugins.production)
  }

  shared.cleanRollupObj(config)
  return rollup(config)
    .pipe(source(`${fileName}.${isProduction ? 'min.js' : 'js'}`))
    .pipe(gulp.dest(dest || 'dist' + `/${config.format}`))
}

function rollupGenerate () {
  const streams = []

  for (let entry of rollupConfig._entries) {
    const configObj = Object.assign({}, rollupConfig, { _entry: entry })

    for (let format of rollupConfig._formats) {
      configObj.format = format
      streams.push(rollupRun(configObj))
      streams.push(rollupRun(configObj, true))
    }
  }

  return mergeStream(streams)
}

function cleanDist () {
  return gulp.src('dist/')
    .pipe(vinylPaths(del))
}

function checkStandard () {
  return gulp.src(['./**/*.js', '!node_modules/**/*.js', '!bower_components/**/*.js', '!dist/**/*.js', '!docs/**/*.js', '!.test/**/*.js'])
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnError: !argv.unbreakable,
      breakOnWarning: !argv.unbreakable
    }))
    .on('error', () => process.exit())
}

function test (done, singleRun) {
  new Server({
    singleRun,
    configFile: path.join(__dirname, '/karma.conf.js')
  }, done).start()
}

gulp.task('standard:clean:rollup', ['standard:clean'], () => {
  return rollupGenerate()
})

gulp.task('standard:clean', ['standard'], () => {
  return cleanDist()
})

gulp.task('standard', () => {
  if (!argv.unsafe) {
    return checkStandard()
  }
})

gulp.task('watch', () => {
  gulpUtil.log('Watching for changes on src folder...')
  gulp.watch(['./src/**/*.js', './src/**/*.scss', './src/**/*.html', './src/**/*.svg'], ['standard:clean:rollup'])
})

gulp.task('generate-docs', ['default'], () => {
  return gulp.src('src/**/*.js')
    .pipe(ngdocs.process({
      html5Mode: false,
      title: 'UI Kit',
      styles: [
        'bower_components/floatl/lib/css/floatl.css'
      ],
      scripts: [
        'bower_components/floatl/lib/js/floatl.global.js',
        'dist/iife/ngVivaUi.min.js',
        'dist/iife/ngVivaUi.label.min.js',
        'dist/iife/ngVivaUi.pagination.min.js'
      ],
      loadDefaults: {
        prettify: true
      }
    }))
    .pipe(gulp.dest('docs'))
    .pipe(connect.reload())
})

gulp.task('docs-server', () => {
  return connect.server({
    root: 'docs',
    livereload: true
  })
})

gulp.task('watch-docs', () => {
  gulpUtil.log('Watching for changes on src folder...')
  gulp.watch(['./src/**/*.js', './src/**/*.scss', './src/**/*.html', './src/**/*.svg'], ['generate-docs'])
})

gulp.task('test', (done) => {
  return test(done, true)
})

gulp.task('test:continuous', (done) => {
  return test(done, false)
})

gulp.task('default', ['standard:clean:rollup'])
gulp.task('dev', ['watch', 'default'])
gulp.task('docs', ['generate-docs', 'docs-server', 'watch-docs'])
