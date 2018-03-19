/**
 * Returns the number of overlapping matches of a RegExp pattern in a string
 * @param {String} string
 * @param {RegExp} regex, regex pattern with global flag set. e.g. /[a-zA-Z]+/g
 * @param {number} start, will search forward from this index
 * @param {number} matches, used by recursion, do not set
 * @param {number} indices, used by recursion, do not set
 */

const overlapRegex = (string, regex, start = 0, matches = 0, indices = []) => {
  let match
  if (start === string.length) {
    return matches
  } else {
    regex.lastIndex = start
    if ((match = regex.exec(string)) && (!indices.includes(regex.lastIndex))) {
      matches++
      indices.push(regex.lastIndex)
    }
    return overlapRegex(string, regex, start + 1, matches, indices)
  }
}

module.exports = overlapRegex
