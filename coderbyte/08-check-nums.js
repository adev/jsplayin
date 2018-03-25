const checkNums = (num1, num2) =>
  num1 === num2
    ? '-1'
    : num2 > num1
      ? 'true'
      : 'false'

module.exports = checkNums
