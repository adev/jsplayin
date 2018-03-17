const longestWord = sentence =>
  sentence
    .match(/[a-zA-Z]+/g)
    .reduce((result, current) =>
      result.length >= current.length
        ? result
        : current
    )

module.exports = longestWord
