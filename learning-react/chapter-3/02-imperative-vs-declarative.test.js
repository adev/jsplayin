/*
Functional programming is part of a larger programming paradigm: declarative
programming.

Declarative programming is a style of programming where applications are structured
in a way that prioritises describing what should happen over defining how it
should happen.
*/

const imperativeFriendlyUrl = text => {
  let urlFriendly = ''
  for (var i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
      urlFriendly += '-'
    } else {
      urlFriendly += text[i]
    }
  }
  return urlFriendly
}

const declarativeFriendlyUrl = text => text.replace(/ /g, '-')

describe('imperative-vs-declarative', () => {
  let text = 'This is the string to make url friendly'
  let result = 'This-is-the-string-to-make-url-friendly'
  test('url-friendly imperative', () => {
    expect(imperativeFriendlyUrl(text)).toBe(result)
  })
  test('url-friendly declarative', () => {
    expect(declarativeFriendlyUrl(text)).toBe(result)
  })
})
