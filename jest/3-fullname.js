module.exports = fullname

function fullname (name) {
  full = name.split(' ')
  return {first: full[0], last: full[1]}
}
