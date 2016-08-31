import angular from 'angular'
import labelModule, { moduleName } from './label.module'

describe('labelModule', () => {
  it('should return the app module object', () => {
    const appModule = angular.module(moduleName)
    expect(labelModule).toBe(appModule)
  })
})
