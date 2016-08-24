import { camelize } from './utils'

describe('Utils', () => {
  it('should covert my-simple-test to mySimpleTest', () => {
    expect(camelize('my-simple-test')).toBe('mySimpleTest')
  })
})
