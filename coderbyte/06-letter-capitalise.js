const letterCapitalise = sentence =>
  sentence
    .match(/[a-z]+/gi)
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ')

module.exports = letterCapitalise

// console.log(
//   '>>>' + letterCapitalise('this that and the other') + '<<<'
// )
