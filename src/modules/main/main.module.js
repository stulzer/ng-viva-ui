import angular from 'angular'
import { name } from '../../../package.json'
import { hifen2CamelCase } from '../../utils/utils'

const moduleName = hifen2CamelCase(name)

/**
 * @ngdoc overview
 * @name ngVivaUi
 * @description
 * #ngVivaUi
 * Viva Ui Kit's implementation for AngularJS.
 */
const mainModule = (() => {
  try {
    return angular.module(moduleName)
  } catch (e) {
    return angular.module(moduleName, [])
  }
})()

export { mainModule as default, moduleName }
