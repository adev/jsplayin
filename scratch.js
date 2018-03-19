// let list = ['eggs', 'milk', 'bacon', 'cheese']
// let text = 'I went to the park one day'

// let fakeapi = thing => {
//   setTimeout(() => console.log(`fakeapi'd:  ${thing}`), 3000)
// }
//
// fakeapi('banana')

var regex = /\+[a-z]\+/gi
var searchme = '+a+a+a+a+a+=====+a+sdfasdf o+a+a+'
// var matches = []
// var matchindices = []
// var match
// var mylastindex = 0
//
// while ( mylastindex < searchme.length ){
//   if ( ( match = regex.exec(searchme) ) &&
//     ( !matchindices.includes(regex.lastIndex) ) ){
//         matches.push(match[0])
//         matchindices.push(regex.lastIndex)
//   }
//   mylastindex++
//   regex.lastIndex = mylastindex
// }
//
// console.log(matchindices, matches.length)

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
console.log(overlapRegex(searchme, regex))
