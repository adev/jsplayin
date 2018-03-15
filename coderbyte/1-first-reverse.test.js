/*
https://coderbyte.com/editor/guest:First%20Reverse:JavaScript

Challenge
Using the JavaScript language, have the function FirstReverse(str) take the str
parameter being passed and return the string in reversed order.

For example: if the input string is "Hello World and Coders" then your program
should return the string sredoC dna dlroW olleH.

Sample Test Cases
Input:"coderbyte"
Output:"etybredoc"

Input:"I Love Code"
Output:"edoC evoL I"
*/

const firstReverse = require('./1-first-reverse')

test('FirstReverse(str)', () => {
  const coderbyte = 'coderbyte'
  const loveCode = 'I Love Code'
  expect(firstReverse(coderbyte)).toBe('etybredoc')
  expect(coderbyte).toBe('coderbyte')
  expect(firstReverse(loveCode)).toBe('edoC evoL I')
  expect(loveCode).toBe('I Love Code')
})
