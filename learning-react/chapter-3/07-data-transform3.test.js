/*
The reduce and reduceRight functions can be used to transform an array into
any value, including a number, string, boolean, object, or even a function.

 Let’s say we needed to find the maximum number in an array of numbers.
 We need to transform an array into a number; therefore, we can use reduce:
*/

const ages = [21, 18, 42, 40, 64, 63, 34]

const getHighest = arrNumbers => arrNumbers.reduce(
  (result, currentVal) => (currentVal > result ? currentVal : result)
)

const colours = [
  { id: '-xekare', title: 'red red', rating: '3'},
  { id: '-jbwsof', title: 'big blue', rating: '2'},
  { id: '-prigbj', title: 'grizzly grey', rating: '5'},
  { id: '-ryhbhs1', title: 'banana', rating: '1'}
]

const hashArray = array => array.reduce(
  (result, {id, title, rating}) => {
    result[id] = {title, rating}
    return result
  }, {}
)

const colours2 = ['red', 'red', 'green', 'blue', 'green']

const getDistinct = array => array.reduce(
  (distinct, item) =>
    (distinct.includes(item)) ? distinct : [...distinct, item],
  []
)

describe('Transforming data with reduce', () => {
  test('get highest number - immutable', () => {
    expect(getHighest(ages)).toBe(64)
    expect(ages.length).toBe(7)
  })

  test('reduce array of objects to hash', () => {
    expect(hashArray(colours)).toEqual({
      '-xekare': {title: 'red red', rating: '3'},
      '-jbwsof': {title: 'big blue', rating: '2'},
      '-prigbj': {title: 'grizzly grey', rating: '5'},
      '-ryhbhs1': {title: 'banana', rating: '1'}
    })
  })

  test('use reduce to get distinct values', () => {
    expect(getDistinct(colours2)).toEqual(
      ['red', 'green', 'blue']
    )
  })
})
