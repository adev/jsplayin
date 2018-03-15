/*
Object literal enhancement is the opposite of destructuring. It is the process
of restructuring or putting back together. With object literal enhancement, we
can grab variables from the global scope and turn them into an object:

Banks, Alex; Porcello, Eve (2017-04-27). Learning React: Functional Web Developm
ent with React and Redux (Kindle Locations 754-755). O'Reilly Media. Kindle Edition.
*/

var fruit = 'banana'
var icecream = 'vanilla'
var toppings = ['oreo', 'fudge sauce']

describe('Object Literal Enhancement / restructuring', () => {
  test('building an object from global vars', () => {
    let sundae = { fruit, icecream, toppings }
    expect(sundae.fruit).toBe(fruit)
    expect(sundae.icecream).toBe(icecream)
    expect(sundae.toppings).toBe(toppings)
  })

  test('adding methods with restructuring', function () {
    // note that we need to use traditional rather than arrow assignment
    // here so that we can use this. to access object properties.
    let name = function () {
      return `${this.fruit} and ${this.icecream} sundae`
    }
    let sundae = {fruit, icecream, toppings, name}
    expect(sundae.name()).toBe('banana and vanilla sundae')
  })

  test('old versus new object syntax', () => {
    let name = 'Bob'
    let sound = 'Yeehar'
    let oldSkier = {
      name: name,
      sound: sound,
      yell: function () {
        let yell = this.sound.toUpperCase()
        return `${yell} ${yell} ${yell} !!!`
      },
      speed: function (mph) {
        this.speed = mph
        return this.speed
      }
    }
    let newSkier = {
      name,
      sound,
      yell () {
        let yell = this.sound.toUpperCase()
        return `${yell} ${yell} ${yell} !!!`
      },
      speed (mph) {
        this.speed = mph
        return this.speed
      }
    }
    expect(oldSkier.name).toBe(newSkier.name)
    expect(oldSkier.sound).toBe(newSkier.sound)
    expect(oldSkier.yell()).toBe('YEEHAR YEEHAR YEEHAR !!!')
    // expect(oldSkier.speed(50)).toBe(50)
    expect(oldSkier.yell()).toBe(newSkier.yell())
    expect(oldSkier.speed(75)).toBe(newSkier.speed(75))
  })
})
