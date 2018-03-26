var dan = {
  type: 'person',
  data: {
    gender: 'male',
    info: {
      id: 22,
      fullname: {
        first: 'Dan',
        last: 'the man'
      }
    }
  }
}

const getInfo = (node, obj=({})) => {
  const [first, ...remaining] = node.split('.')
  return (remaining.length)
    ? getInfo( remaining.join('.'), obj[first])
    : obj[first]
}



test('data discovery with recursion', () => {
  expect(getInfo('type', dan)).toBe('person')
  expect(getInfo('data.gender', dan)).toBe('male')
  expect(getInfo('data.info.id', dan)).toBe(22)
  expect(getInfo('data.info.fullname.first', dan)).toBe('Dan')
  expect(getInfo('data.info.fullname.last', dan)).toBe('the man')
})
