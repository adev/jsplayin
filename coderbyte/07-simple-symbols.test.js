// Challenge
// Using the JavaScript language, have the function SimpleSymbols(str)
// take the str parameter being passed and determine if it is an acceptable
// sequence by either returning the string true or false.
// The str parameter will be composed of + and = symbols with several
// letters between them (ie. ++d+===+c++==a) and for the string to be
// true each letter must be surrounded by a + symbol. So the string to
// the left would be false. The string will not be empty and will have at
// least one letter.
//
// Sample Test Cases
// Input:"+d+=3=+s+"
// Output:"true"
//
//
// Input:"f++d+"
// Output:"false"

const simpleSymbols = require('./07-simple-symbols')

test('Coderbyte: Simple Symbols', () => {
  // matches the pattern for both letters
  expect(simpleSymbols('+d+=3=+s+')).toBe(true)
  // matches the pattern for only one letter
  expect(simpleSymbols('f++d+')).toBe(false)
  // no letters, so the string passes
  expect(simpleSymbols('=+=+.+===')).toBe(true)
  // one letter that doesn't pass the pattern
  expect(simpleSymbols('=+=+3+==+d')).toBe(false)
  // two letters one pattern match
  expect(simpleSymbols('+a+a-')).toBe(false)
  // two letters, overlapping pattern
  expect(simpleSymbols('+a+a+')).toBe(true)
})
