module.exports = remvowels

function remvowels (text) {
  return text.replace(/[aeiou]/g, '')
}
