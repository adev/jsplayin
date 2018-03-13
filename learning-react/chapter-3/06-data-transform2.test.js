const schools = {
  'Yorktown': 10,
  'Washington & Lee': 3,
  'Wakefield': 5
}

const objToArr = arr => {
  return Object.keys(arr).map(
    key => ({
      name: key,
      wins: arr[key]
    })
  )
}

test('transform object to array of objects', () => {
  expect(objToArr(schools)).toEqual([
    {name:'Yorktown', wins:10},
    {name:'Washington & Lee', wins:3},
    {name:'Wakefield', wins:5}
  ])
})
