'use strict'

const babel = require('rollup-plugin-babel')
const commonjs = require('rollup-plugin-commonjs')
const json = require('rollup-plugin-json')
const sass = require('rollup-plugin-sass')
const string = require('rollup-plugin-string')
const uglify = require('rollup-plugin-uglify')

const packageJson = require('./package.json')
const uglifyJS = require('uglify-js')

module.exports = {
  entry: './src/main.js',
  globals: {
    'angular': 'angular'
  },
  sourceMap: true,
  useStrict: true,
  moduleName: packageJson.name,
  external: ['angular'],
  _testFormat: 'iife',
  _rollupPlugins: {
    default: [
      json(),
      sass(),
      string({
        include: ['src/**/*.html', 'src/**/*.svg']
      }),
      babel({
        exclude: 'node_modules/**'
      }),
      commonjs({
        exclude: 'node_modules/**'
      })
    ],
    production: [
      uglify({}, uglifyJS.minify)
    ]
  },
  _formats: [
    'cjs',
    'amd',
    'umd',
    'iife',
    'es'
  ]
}
