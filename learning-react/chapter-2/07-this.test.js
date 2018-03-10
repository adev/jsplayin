/*
For more info see

MDN Documentation on arrow functions

https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/

*/


// 'this' is specific to a function. This traditionally creates a problem with nested functions.
// arrow function syntax doesn't create a local 'this' but uses the 'this' of the enclosing context
// practically, this means deliberately using non-arrow function syntax if you want to stop "this" using
// global context

//try changing the print function in the skiScotland object below to use arrow syntax and see what happens.
var skiScotland = {
    resorts: ['Glenshee', 'Aviemore', 'The Lecht', 'Glen Coe', 'Wild Skiing'],
    print:function(delay=1000){
        setTimeout( () => {
            console.log(this)
            console.log(this.resorts.join(", "))
        }, delay)
    }
}

const oldNastyLength = function (skiCountry) {
    let result = []
    for ( let i = 0; i < skiCountry.resorts.length; i++){
        result.push(skiCountry.resorts[i].length)
    }
    return result
}

const arrowMapLength = skiCountry => skiCountry.resorts.map( resort => resort.length )

const destructureMapLength = ({resorts}) => resorts.map(resort => resort.length)

//console.log (oldNastyLength( skiScotland ))

describe('playing with arrow functions - getting the length of resort names',() => {
    let result = [ 8, 8, 9, 8, 11 ]
    test('old nasty',() => {
        expect(oldNastyLength( skiScotland )).toEqual(result)
    })
    test('arrow and map',() => {
        expect(arrowMapLength( skiScotland )).toEqual(result)
    })
    test('arrow and map, with an object destructuring parameter', () => {
        expect(destructureMapLength( skiScotland )).toEqual(result)
    })
})
