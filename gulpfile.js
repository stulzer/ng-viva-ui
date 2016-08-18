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

function rollupRun (config, isProduction, dest) {
  config = Object.assign({}, config)
  const moduleName = config.moduleName
  const _rollupPlugins = config._rollupPlugins

  config.moduleName = config.format === 'iife' ? utils.hifen2LowerCase(moduleName) : moduleName
  config.plugins = _rollupPlugins.default

  if (isProduction) {
    config.plugins = config.plugins.concat(_rollupPlugins.production)
  }

  utils.cleanRollupObj(config)
  return rollup(config)
    .pipe(source(`${moduleName}.${isProduction ? 'min.js' : 'js'}`))
    .pipe(gulp.dest(dest || 'dist' + `/${config.format}`))
}

function rollupGenerate () {
  const streams = []

  for (let format of rollupConfig._formats) {
    const configObj = Object.assign({}, rollupConfig, {format})

    streams.push(rollupRun(configObj))
    streams.push(rollupRun(configObj, true))
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
  return checkStandard()
})

gulp.task('watch', () => {
  gulpUtil.log('Watching for changes on src folder...')
  gulp.watch(['./src/**/*.js', './src/**/*.scss', './src/**/*.html', './src/**/*.svg'], ['standard:clean:rollup'])
})

gulp.task('generate-docs', () => {
  return gulp.src('src/**/*.js')
    .pipe(ngdocs.process({
      html5Mode: false,
      title: 'UI Kit'
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
