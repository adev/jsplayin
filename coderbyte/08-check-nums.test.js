// Challenge
// Using the JavaScript language, have the function CheckNums(num1,num2) take both
// parameters being passed and return the string true if num2 is greater than num1,
// otherwise return the string false. If the parameter values are equal to each
// other then return the string -1.
//
// Sample Test Cases
// Input:3 & num2 = 122
// Output:"true"
//
//
// Input:67 & num2 = 67
// Output:"-1"

const checkNums = require('./08-check-nums')

test('Coderbyte checkNums ', () => {
  expect(checkNums(3, 122)).toBe('true')
  expect(checkNums(122, 3)).toBe('false')
  expect(checkNums(122, 122)).toBe('-1')
})
