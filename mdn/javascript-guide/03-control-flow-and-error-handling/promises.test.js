const youPromised = thing => {
    return new Promise( (resolve, reject) => {
        if ( thing === 'the earth' ) reject(Error(`Error - I didn't promise the earth`))
        resolve(`you promised me ${thing} !`)
    })
}

/*
youPromised('a new car').then(data => console.log(data), error => console.log(error))

youPromised('the earth').then(
    data => console.log(data),
    error => console.log(error)
)

*/

describe('Promises', () => {
    test('resolved', () => {
        expect.assertions(1)
        //TODO - tried to use await here - got an error saying that await was a
        // reserved word - google 'jest await reserved'
        return expect(youPromised('flowers')).resolves.toBe('you promised me flowers !')
    })

    test('rejected, failing with an error', () => {
        expect.assertions(1)
        return expect( youPromised('the earth') ).rejects.toThrow("Error - I didn't promise the earth")
    })


})
