
const firstReverse = str => str.split('').reduce(
  (word, letter) => letter + word
)

module.exports = firstReverse

console.log(
  firstReverse('this that and the other')
)
