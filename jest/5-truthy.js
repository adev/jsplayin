module.exports = truthy

function truthy (thing) {
  let result
  if (thing === 0) {
    result = null
  } else if (thing > 0 && thing < 10) {
    result = 'lucky'
  }
  return result
}
