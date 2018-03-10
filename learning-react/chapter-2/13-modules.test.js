//stuff
//TODO - figure out how imports work with jest - get an 'unexpected token error'
// if I try and export / import rather than common js (module.exports / require)
const mymodule = require('./13-modules')

describe('simple modules tests', () => {
    test('root export', ()=>{
        expect(mymodule()).toBe('I like modules')
    })

    test('sayMyName - sub modules', () => {
        expect(mymodule.sayMyName('Andy')).toBe('here\'s Andy!!')
        expect(mymodule.counter(9)).toBe(10)
    })
    test('constant', () => {
        expect(mymodule.SOMECONSTANT).toBe('SOMETHING')
    })
    test('destructured import', () => {
        expect(t1).toBe('thing1')
        expect(t2).toBe('thing2')
        expect(t3).toBeFalsey()
    })
})
