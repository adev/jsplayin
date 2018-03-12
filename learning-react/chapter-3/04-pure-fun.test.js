/*
A pure function is a function that returns a value that is computed based
on its arguments. Pure functions take AT LEAST ONE ARGUMENT and always RETURN A
VALUE OR ANOTHER FUNCTION.

They do
 - NOT cause side effects
 - NOT set global variables
 - NOT change anything about application state
 - NOT change or mutate any of its arguements
*/

var fred = {}

const impureEducation = function () {
  fred.canRead = true
  fred.canWrite = true
  fred.catchPhrase = 'Yaba-daba-doo!'
  return fred
}
const pureEducation = (person) => ({
  ...person,
  canRead: true,
  canWrite: true,
  catchPhrase: 'Yaba-daba-doo!'
})

describe('Pure / Impure education for Fred', () => {
  beforeEach( () => {
    fred = {
      name: 'Fred Flint',
      canRead: false,
      canWrite: false,
      catchPhrase: 'YABA-DABA-DOO!!!'
    }
  })

  test('impure education', () => {
    let cleverFred = impureEducation()
    expect(fred.canRead).toBe(true)
    expect(fred.canWrite).toBe(true)
    expect(fred.catchPhrase).toBe('Yaba-daba-doo!')
    expect(cleverFred == fred).toBeTruthy()
  })

  test('pure education', () => {
    let cleverFred = pureEducation(fred)
    expect(fred.canRead).toBe(false)
    expect(fred.canWrite).toBe(false)
    expect(fred.catchPhrase).toBe('YABA-DABA-DOO!!!')
    expect(cleverFred.canRead).toBe(true)
    expect(cleverFred.canWrite).toBe(true)
    expect(cleverFred.catchPhrase).toBe('Yaba-daba-doo!')
    expect(cleverFred == fred).toBeFalsy()
  })
})
