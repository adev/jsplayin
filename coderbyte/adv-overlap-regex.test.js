const overlapRegex = require('./adv-overlap-regex')

test('AdV Overlap Regex', () => {
  expect(overlapRegex('=ab=cd=de=fg=hi==',/=[a-z][a-z]=/ig)).toBe(5)
  expect(overlapRegex('ab=cd=de=fg=hi==',/=[a-z][a-z]=/ig)).toBe(4)
  expect(overlapRegex('==ab=cd=de=fg=hi',/=[a-z][a-z]=/ig)).toBe(4)
  expect(overlapRegex('==ab=cdde=fg=hi',/=[a-z][a-z]=/ig)).toBe(2)
  expect(overlapRegex('=ab=cd==s=a==de=fg=hi==',/=[a-z][a-z]=/ig)).toBe(5)
  expect(overlapRegex('+d+=3=+s+',/\+[a-z]\+/gi )).toBe(2)
})
