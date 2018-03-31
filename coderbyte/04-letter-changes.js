const letterChanges = str =>
  str
    .split('')
    .map( letter =>
      letter.charCodeAt(0) === 122
        ? 'a'
        : String.fromCharCode(letter.charCodeAt(0) + 1)
    ).join('')


module.exports = letterChanges
