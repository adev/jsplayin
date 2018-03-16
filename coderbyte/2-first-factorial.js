const firstFactorial = num =>
  (num === 1)
    ? num
    : num * firstFactorial(num - 1)

module.exports = firstFactorial
