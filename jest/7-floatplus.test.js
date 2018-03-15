const floatplus = require('./7-floatplus')

test('1.6 plus 2.3 equals 3.9', () => {
  expect(floatplus(1.6, 2.3)).toBeCloseTo(3.9)
})
