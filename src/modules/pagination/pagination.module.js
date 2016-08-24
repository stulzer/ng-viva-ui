import angular from 'angular'
import { moduleName as mainModuleName } from '../main/main.module'

const moduleName = `${mainModuleName}.pagination`

/**
 * @ngdoc overview
 * @name ngVivaUi.pagination
 * @requires ngVivaUi
 * @requires angularUtils.directives.dirPagination
 * @description
 * #ngVivaUi.pagination
 * Viva Ui Kit's pagination implementation for AngularJS.
 */
const paginationModule = (() => {
  try {
    return angular.module(moduleName)
  } catch (e) {
    return angular.module(moduleName, [mainModuleName, 'angularUtils.directives.dirPagination'])
  }
})()

export { paginationModule as default, moduleName }
