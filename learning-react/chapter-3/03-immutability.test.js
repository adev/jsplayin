/*
In a functional program data is immutable, it never changes.

Instead of changing the original data structures we build changed copies of those
data structures and use them instead
*/

const mutaLawnRater = (colour, rating) => {
  colour.rating = rating
  return colour
}

const immuLawnRater = (colour, rating) => {
  return Object.assign({}, colour, {rating: rating})
}

const immuLawnRaterES6 = (colour, rating) => ({ ...colour, rating })

describe('lawn-colour rater', () => {
  let colour_lawn = {}

  beforeEach(() => {
    colour_lawn = {
      title: 'lawn',
      colour: '#00FF00',
      rating: 4
    }
  })

  test('mutable lawn rating', () => {
    // passes in a colour object and returns the  object, updated
    mutaLawnRater(colour_lawn, 5)
    expect(colour_lawn.rating).toBe(5)
  })

  test('immutable lawn rating', () => {
    // passes in a colour object and returns a copy of the object, updated
    let colour_lawn_new = immuLawnRater(colour_lawn, 5)
    expect(colour_lawn.rating).toBe(4)
    expect(colour_lawn_new.rating).toBe(5)
  })

  test('immutable lawn rating - using spread operator', () => {
    // passes in a colour object and returns a copy of the object, updated
    let colour_lawn_new = immuLawnRaterES6(colour_lawn, 5)
    expect(colour_lawn.rating).toBe(4)
    expect(colour_lawn_new.rating).toBe(5)
  })
})

const mutaAddColour = (list, colourName) => list.push({title: colourName})
const immuAddColour = (list, title) => [ ...list, {title} ]

describe('adding to a lawn-colour list', () => {
  let list = []

  beforeEach(() => {
    list = [ {title: 'Rad Red'}, {title: 'Lawn'}, {title: 'Party Pink'}]
  })

  test('mutable colour adding', () => {
    mutaAddColour(list, 'Glam Green')
    expect(list.length).toBe(4)
    expect(list[3]).toEqual({title: 'Glam Green'})
  })

  test('immutable colour adding', () => {
    let newList = immuAddColour(list, 'Glam Green')
    expect(list.length).toBe(3)
    expect(list[2]).toEqual({title: 'Party Pink'})
    expect(newList.length).toBe(4)
    expect(newList[3]).toEqual({title: 'Glam Green'})
  })
})
