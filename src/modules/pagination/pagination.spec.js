import angular from 'angular'
import paginationModule, { moduleName } from './pagination.module'

describe('paginationModule', () => {
  it('should return the app module object', () => {
    const appModule = angular.module(moduleName)
    expect(paginationModule).toBe(appModule)
  })
})
