const teeny = require('./6-teeny')

test('Returns between 12 and 20', () => {
  for (let i = 0; i < 100; i++) {
    expect(teeny()).toBeGreaterThan(12)
    expect(teeny()).toBeGreaterThanOrEqual(13)
    expect(teeny()).toBeLessThan(20)
    expect(teeny()).toBeLessThanOrEqual(19)
  }
})
