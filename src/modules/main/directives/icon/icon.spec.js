import { moduleName } from '../../main.module'
import './icon.directive'

describe('vivaUiCheckbox', () => {
  beforeEach(angular.mock.module(moduleName))

  let $compile
  let $rootScope

  let outsideScope
  let $subject

  beforeEach(inject((_$compile_, _$rootScope_) => {
    $compile = _$compile_
    $rootScope = _$rootScope_

    createSubject('<viva-ui-icon icon="{{icon}}">')
  }))

  function createSubject (element) {
    outsideScope = $rootScope.$new(true)
    outsideScope.icon = 'check'

    $subject = $compile(element)(outsideScope)
    outsideScope.$digest()
  }

  it('should create an svg inside of the directive', () => {
    expect($subject.children()[0].tagName).toBe('svg')
  })

  it('should clean the directive after an invalid icon name inserted', () => {
    outsideScope.icon = 'notAValidIconName'
    outsideScope.$digest()

    expect($subject.children().length).toBe(0)
  })
})
