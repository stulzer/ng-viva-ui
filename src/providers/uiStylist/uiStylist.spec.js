import angular from 'angular'
import { name } from '../../../package.json'
import { $uiStyle, applyStyle } from './uiStylist'

describe('UiStylist', () => {
  beforeEach(angular.mock.module(name))

  it('should return a style element', () => {
    const uiStyleElement = $uiStyle[0]
    expect(uiStyleElement.tagName).toBe('STYLE')
  })

  it('should apply a CSS string inside of DOM', () => {
    const cssStr = 'div { display: block; }'
    applyStyle(cssStr)

    expect($uiStyle.text()).toBe(cssStr)
  })
})
