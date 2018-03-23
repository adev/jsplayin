const simpleSymbols = str => [...str].reduce(
  (passes, currentChar, i) =>
    (currentChar.match(/[a-z]/i))
      ? (str.slice(i - 1, i + 2).match(/\+[a-z]\+/i))
        ? passes !== false : false
      : passes
  , true)

module.exports = simpleSymbols

// console.log(
//   simpleSymbols2('+d+=3=+s+')
// )
