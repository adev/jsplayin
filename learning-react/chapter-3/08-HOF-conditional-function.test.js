const conditionalFun = (condition, fnTrue, fnFalse) =>
  (condition) ? fnTrue() : fnFalse()

const trueFun = () => 'This is true'
const falseFun = () => 'This is false'

test('ConditionalFun', () => {
  expect(conditionalFun(true, trueFun, falseFun)).toBe('This is true')
  expect(conditionalFun(false, trueFun, falseFun)).toBe('This is false')
})  
