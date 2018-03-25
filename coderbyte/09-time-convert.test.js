// Challenge
// Using the JavaScript language, have the function TimeConvert(num) take the num
// parameter being passed and return the number of hours and minutes the parameter
// converts to (ie. if num = 63 then the output should be 1:3). Separate the
// number of hours and minutes with a colon.
//
// Sample Test Cases
// Input:126
// Output:"2:6"
//
// Input:45
// Output:"0:45"

const timeConvert = require('./09-time-convert')

test('Coderbyte, time convert', () => {
  expect(timeConvert(60)).toBe('1:0')
  expect(timeConvert(126)).toBe('2:6')
  expect(timeConvert(45)).toBe('0:45')
})
