// stuff
// TODO - figure out how imports work with jest - get an 'unexpected token error'
// if I try and export / import rather than common js (module.exports / require)
const mymodule = require('./13-modules')
// i m p o r t { thing1 as t1, thing2 as t2 } from './13-module2'
const {thing1, thing2} = require('./13-module2')

describe('simple modules tests', () => {
  test('root export', () => {
    expect(mymodule()).toBe('I like modules')
  })

  test('sayMyName - sub modules', () => {
    expect(mymodule.sayMyName('Andy')).toBe('here\'s Andy!!')
    expect(mymodule.counter(9)).toBe(10)
  })
  test('constant', () => {
    expect(mymodule.SOMECONSTANT).toBe('SOMETHING')
  })
  // Node doesn't support import so can't do destructured import tests in jest

  test('destructured import', () => {
    expect(thing1).toBe('thing1')
    expect(thing2).toBe('thing2')
    expect(() => { thing3 }).toThrowError()
  })
})
