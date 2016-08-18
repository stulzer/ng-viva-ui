import angular from 'angular'
import { name } from '../../../package.json'
import uiModule from './uiModule'

describe('UiModule', () => {
  it('should return the app module object', () => {
    const appModule = angular.module(name)
    expect(uiModule).toBe(appModule)
  })
})
