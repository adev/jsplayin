// https://coderbyte.com/editor/guest:Letter%20Changes:JavaScript
//
// Challenge
// Using the JavaScript language, have the function LetterChanges(str) take
// the str parameter being passed and modify it using the following algorithm.
// Replace every letter in the string with the letter following it in the
// alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in
// this new string (a, e, i, o, u) and finally return this modified string.
//
// Sample Test Cases
// Input:"hello*3"
// Output:"Ifmmp*3"
//
//
// Input:"fun times!"
// Output:"gvO Ujnft!"

const letterChanges = require('./04-letter-changes')

test('coderbyte letter changes', () => {
  expect(letterChanges('hello*3')).toBe('Ifmmp*3')
  expect(letterChanges('fun times!')).toBe('gvO Ujnft!')
})
