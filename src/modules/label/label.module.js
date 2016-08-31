import angular from 'angular'
import { moduleName as mainModuleName } from '../main/main.module'

const moduleName = `${mainModuleName}.label`

/**
 * @ngdoc overview
 * @name ngVivaUi.label
 * @requires ngVivaUi
 * @description
 * #ngVivaUi.label
 * Viva Ui Kit's label implementation for AngularJS.
 */
const labelModule = (() => {
  try {
    return angular.module(moduleName)
  } catch (e) {
    return angular.module(moduleName, [mainModuleName])
  }
})()

export { labelModule as default, moduleName }
