/*
The spread operator is three dots (...) that perform several different tasks.

First, the spread operator allows us to combine the contents of arrays
*/


//In a world with the spread operator, we don’t have to mutate the
//original array; we can create a copy of the array and then reverse it:
const reversim = array => [...array].reverse()
const reversmu = array => array.reverse()

// We can also use the spread operator to collect function arguments as an array.
const fruitsalad =  (...args) => {
    let [first, ...remaining] = args
    let [last, ...midfruit] = remaining.reverse()
    return `First roughly chop the ${first} and the ${last}, the finely finely`+
            ` chop the other ${midfruit.length}. Lastly, mix all ${args.length}`+
            ` together in a bowl and serve with cream!`
}

// we can also use the spread operator with objects, to combine:


describe('spread operator', () => {
    let fruit = ['apple', 'orange', 'kiwi', 'banana']
    let flowers = ['rose', 'lily']

    test('combining arrays',() =>{
        let fruitnflowers = [...fruit, ...flowers]
        expect(fruitnflowers).toEqual(['apple', 'orange', 'kiwi', 'banana','rose', 'lily'])
        expect(fruitnflowers[0]).toBe('apple')
        expect(fruitnflowers[4]).toBe('rose')
    })

    test('the spread operator copies arrays - so the data stays immutable', () => {
        expect(reversim(fruit)[0]).toBe('banana')
        expect(fruit[0]).toBe('apple')
    })
    test('mutable reverse array', () => {
        expect(reversmu(fruit)[0]).toBe('banana')
        expect(fruit[0]).toBe('banana')
    })

    test('collecting function arguments', () => {
        expect(fruitsalad('apple', 'orange', 'kiwi', 'banana')).toBe(
            `First roughly chop the apple and the banana, the finely finely chop the other 2. Lastly, mix all 4 together in a bowl and serve with cream!`
        )
    })

    test('combining objects', ()=>{
        let immediate = {mum: 'josey', dad: 'wilbur', son: 'jim'}
        let extended = { cousin: 'sarah', uncle: 'bob' }
        let theclan = {...immediate, ...extended}
        theclan.uncle = 'wendy' //well that surprised everyone
        expect(theclan.mum).toBe('josey')
        expect(theclan.dad).toBe('wilbur')
        expect(theclan.uncle).toBe('wendy')
        // the spread operator copies, so the original extended family object
        // remains unchanged
        expect(extended.uncle).toBe('bob')
    })
})
