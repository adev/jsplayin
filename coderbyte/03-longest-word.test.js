// https://coderbyte.com/editor/guest:Longest%20Word:JavaScript
// ChallengesLearn ⌄ProfileOrganizationsPremium Membership
//
// Tags: string manipulation, searching | Difficulty: Easy
// Challenge
// Using the JavaScript language, have the function LongestWord(sen) take the
// sen parameter being passed and return the largest word in the string.
// If there are two or more words that are the same length, return the first
// word from the string with that length. Ignore punctuation and assume sen will not be empty.
// Sample Test Cases
// Input:"fun&!! time"
// Output:"time"
//
// Input:"I love dogs"
// Output:"love"

const longestWord = require('./03-longest-word')

test('coderbyte longest word', () => {
  expect(longestWord('fun&!! time')).toBe('time')
  expect(longestWord('I love dogs')).toBe('love')
})
