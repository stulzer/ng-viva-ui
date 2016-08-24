import { moduleName } from '../../main.module'
import './checkbox.directive'

describe('vivaUiCheckbox', () => {
  beforeEach(angular.mock.module(moduleName))

  let $compile
  let $rootScope

  let outsideScope
  let $subject

  beforeEach(inject((_$compile_, _$rootScope_) => {
    $compile = _$compile_
    $rootScope = _$rootScope_
  }))

  function createSubject (element) {
    outsideScope = $rootScope.$new(true)
    $subject = $compile(element)(outsideScope)
    outsideScope.$digest()
  }

  it('should require the ngModel directive', () => {
    expect(() => {
      createSubject('<input type="checkbox" viva-ui-checkbox>')
    }).toThrowError(/ngModel/)
  })

  it('should create a div bellow the input', () => {
    createSubject('<input type="checkbox" ng-model="test" viva-ui-checkbox>')
    expect($subject[0].nextSibling.tagName).toBe('DIV')
  })
})
