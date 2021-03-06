// Challenge
// Using the JavaScript language, have the function LetterCapitalize(str)
// take the str parameter being passed and capitalize the first letter of
// each word. Words will be separated by only one space.
//
// Sample Test Cases
// Input:"hello world"
// Output:"Hello World"
//
// Input:"i ran there"
// Output:"I Ran There"

const letterCapitalise = require('./06-letter-capitalise')

test('letter capitalise', () => {
  expect(letterCapitalise('hello world')).toBe('Hello World')
  expect(letterCapitalise('i ran there')).toBe('I Ran There')
})
