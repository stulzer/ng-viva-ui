import utils from './utils'

describe('Utils', () => {
  it('should covert my-simple-test to mySimpleTest', () => {
    expect(utils.hifen2CamelCase('my-simple-test')).toBe('mySimpleTest')
  })
})
