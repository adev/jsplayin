/*
The destructuring assignment allows you to locally scope fields within an object
and to declare which values will be used.
*/

// normal function arguments
const capitalisedMeat = object => {
  return object.meat.replace(object.meat[0], object.meat[0].toUpperCase())
}
// destructuring function arguments
const capitalisedMeat2 = ({meat}) => meat.replace(meat[0], meat[0].toUpperCase())

describe('destructuring', () => {
  let sandwich = {
    bread: 'seed loaf',
    meat: 'ham',
    cheese: 'cheddar',
    toppings: ['lettuce', 'tomato', 'mustard']
  }

  test('locals dont change object vars', () => {
    // destructuring assignment into local variables (by value not reference)
    var {bread, meat} = sandwich
    bread = 'white bloomer'
    meat = 'pastrami'
    expect(sandwich.bread).toBe('seed loaf')
    expect(sandwich.bread).not.toBe(bread)
    expect(sandwich.meat).toBe('ham')
    expect(sandwich.meat).not.toBe(meat)
  })

  test('destructuring in function arguments', () => {
    expect(capitalisedMeat(sandwich)).toBe('Ham')
    expect(capitalisedMeat2(sandwich)).toBe('Ham')
  })

  test('destructuring arrays', () => {
    let cheeses = ['cheddar', 'brie', 'stilton', 'monterey jack', 'edam', 'leerdamer']
    let [firstCheese] = cheeses
    let [, secondCheese] = cheeses
    let [,, thirdCheese] = cheeses
    expect(firstCheese).toBe('cheddar')
    expect(secondCheese).toBe('brie')
    expect(thirdCheese).toBe('stilton')
  })
})
