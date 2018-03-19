const overlapRegex = require('./adv-overlap-regex')

const simpleSymbols = str =>{
  let matches = overlapRegex( str, /\+[a-z]\+/gi )
  let letters = str.match(/[a-z]/gi)

  return (letters)
    ? (matches > 0)
      ? (matches === letters.length)
        ? true
        : false
      : false // letters and no matches for format = fail
    : true // no letters, so letter format passes
}

module.exports = simpleSymbols
