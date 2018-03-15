//traditional function declaration
const lordify = function (name){
    return `${name} of Breadalbane`
}

//arrow function declaration - with a single argument needs no parentheses
const arrowLordify = name => `${name} of Breadalbane`

//if the singe argument has a default, then it needs parantheses
const defaultLordify = (name = 'Bob') => `${name} of Breadalbane`

const lordify2 = function( name, land){
    return `${name} of ${land}`
}

const arrowLordify2 = (name, land) => `${name} of ${land}`

const multilord = function (name, land){
    if (!name) {
        throw new Error ('Missing name when calling multilord function')
    }else if (!land) {
        throw new Error ('Missing land when calling multilord function')
    }
    return `${name} of ${land}`
}


const arrowMultilord = (name, land) => {
    if (!name) {
        throw new Error ('Missing name when calling multilord function')
    }else if (!land) {
        throw new Error ('Missing land when calling multilord function')
    }
    return `${name} of ${land}`
}




describe('arrow functions',() => {
    let lordbob = "Bob of Breadalbane"

    test('traditional function',()=>{
        expect(lordify('Bob')).toBe(lordbob)
    })
    test('arrow function', () => {
        expect(arrowLordify('Bob')).toBe(lordbob)
    })
    test('function + arrow function return the same result', () => {
        expect(lordify('Bob')).toBe(arrowLordify('Bob'))
    })
    test('arrow function with one arg and default value',()=>{
        expect(defaultLordify()).toBe(lordbob)
    })
    test('traditional function, 2 params', ()=>{
        expect(lordify2('Bob', 'Breadalbane')).toBe(lordbob)
    })
    test('arrow function, 2 params', () => {
        expect(arrowLordify2('Bob', "Breadalbane")).toBe(lordbob)
    })
    test('traditional with multiline function body',()=>{
        expect(multilord('Bob', 'Breadalbane')).toBe(lordbob)
    })
    test('traditional with multiline function body & error',()=>{
        expect( () => { multilord('Bob') }).toThrowError('Missing land when calling multilord function')
    })
    test('arrow function with multiline function body',()=>{
        expect(arrowMultilord('Bob', 'Breadalbane')).toBe(lordbob)
    })
    test('arrow Function with multiline function body & error',()=>{
        expect( () => { arrowMultilord('Bob') }).toThrowError('Missing land when calling multilord function')
    })

})
