module.exports = {
  lengthOfName,
  limitToFive,
  getFirst,
  nthChar,
  getLast,
  getMiddle,
  firstCharCode,
  chooseCharCode,
  listCharcodes,
  oneChar,
  contains,
  checkEnd,
  findPosition,
  lastIndexOf
}

function lastIndexOf (text, find, fromIndex = text.length) {
  let result = text.lastIndexOf(find, fromIndex)
  return (result === -1 ? false : result)
}

function findPosition (find, instring, startingIndex = 0) {
  let result = instring.indexOf(find, startingIndex)
  return (result === -1 ? false : result)
}

function checkEnd (find, intext, lengthToSearch) {
  lengthToSearch = (lengthToSearch || intext.length)
  return intext.endsWith(find, lengthToSearch)
}

function contains (find, intext) {
  return intext.includes(find)
}
function oneChar (text, index) {
  return text.charCodeAt(index)
}

function listCharcodes (text) {
  let result = []
  for (let i = 0; i < text.length; i++) {
    result.push(text.charCodeAt(i))
  }
  return result
}

function chooseCharCode (text, index) {
  return text.charCodeAt(index)
}

function firstCharCode (text) {
  return text.charCodeAt(0)
}

function getLast (text) {
  return text.charAt(text.length - 1)
}

function getMiddle (text) {
  let result = ''
  if (text.length % 2 === 0) {
    result = text.charAt(text.length / 2 - 1)
    result += text.charAt(text.length / 2)
  } else {
    result = text.charAt(Math.floor(text.length / 2))
  }
  return result
}

function nthChar (text, index) {
  return text.charAt(index)
}

function getFirst (text) {
  return text.charAt(0)
}

function lengthOfName (name) {
  return name.length
}

function limitToFive (text) {
  return (text.length > 5 ? text.slice(0, 5) : text)
}
