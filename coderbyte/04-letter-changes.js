const capitalizeVowel = letter =>
  (/[aeiou]/i.test(letter)) ? letter.toUpperCase() : letter

const replaceLetterWithNext = letter =>
  (/[^a-z]/i.test(letter))
    ? letter
    : (letter.charCodeAt(0) === 122)
      ? 'a'
      : String.fromCharCode(letter.charCodeAt(0) + 1)

const letterChanges = str => str.split('').map( letter =>
  capitalizeVowel(
    replaceLetterWithNext(letter)
  )
).join('')

module.exports = letterChanges
