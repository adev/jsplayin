
function myConcat (style, tthis, that, other) {
  switch (style) {
    case 0:
      return 'join ' + tthis + ', ' + that + ' and ' + other
    case 1:
      return `join ${tthis}, ${that} and ${other}`
  }
}

describe('templating strings', () => {
  let resultText = 'join this, that and the other'
  test('using traditional concatenation', () => {
    expect(myConcat(0, 'this', 'that', 'the other')).toBe(resultText)
  })
  test('using traditional concatenation', () => {
    expect(myConcat(1, 'this', 'that', 'the other')).toBe(resultText)
  })
})
