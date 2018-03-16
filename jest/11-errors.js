module.exports = terrors

function terrors (thing) {
  if (thing === 'bananas') {
    throw Error('These errors drive me bananas')
  } else {
    thing += thing
    return thing
  }
}
