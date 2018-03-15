const hello = require('./2-hello')

test('Says hello to Bob', () => {
  expect(hello('Bob')).toBe('Hello Bob!')
})
