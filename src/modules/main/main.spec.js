import angular from 'angular'
import mainModule, { moduleName } from './main.module'

describe('mainModule', () => {
  it('should return the app module object', () => {
    const appModule = angular.module(moduleName)
    expect(mainModule).toBe(appModule)
  })
})
