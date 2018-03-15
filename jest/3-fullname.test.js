const fullname = require('./3-fullname')

test('Turns John Smith into a javascript object', () => {
  let thename = fullname('John Smith')
  expect(thename).toEqual({first: 'John', last: 'Smith'})
  expect(thename.first).toBe('John')
  expect(thename.last).toBe('Smith')
})
