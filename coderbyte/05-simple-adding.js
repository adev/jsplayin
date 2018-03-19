const simpleAdding = num =>
  num === 1
    ? num
    : num + simpleAdding(num - 1)

module.exports = simpleAdding
