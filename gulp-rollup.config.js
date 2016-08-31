'use strict'

const babel = require('rollup-plugin-babel')
const commonjs = require('rollup-plugin-commonjs')
const json = require('rollup-plugin-json')
const sass = require('rollup-plugin-sass')
const string = require('rollup-plugin-string')
const uglify = require('rollup-plugin-uglify')

const packageJson = require('./package.json')
const uglifyJS = require('uglify-js')
const utils = require('./src/utils/utils')

module.exports = {
  globals: {
    'angular': 'angular',
    'floatl': 'Floatl'
  },
  sourceMap: true,
  useStrict: true,
  moduleName: utils.hifen2CamelCase(packageJson.name),
  external: ['angular', 'floatl'],
  _entries: [
    {
      pattern: 'src/modules/main/main.export.js'
    },
    {
      name: 'pagination',
      pattern: 'src/modules/pagination/pagination.export.js'
    },
    {
      name: 'label',
      pattern: 'src/modules/label/label.export.js'
    }
  ],
  _testEntry: 'src/modules/main/main.export.js',
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
