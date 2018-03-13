/*
Functional programming is a all about transforming data from one form to another.
We will produce transformed copies using functions.

There are two core functions that you must master in order to be proficient in
functional javascript: Array.map and Array.reduce.
*/

const schools = [ 'Yorktown', 'Washington & Lee', 'Wakefield' ]

const immuPop = schools => schools.filter( school => school != schools[schools.length-1] )

const immuPop2 = schools => [...schools].slice( 0, schools.length-1 )

const makeHigh = schools => schools.map( school => `${school} High School` )

const objectifySchools = schools => schools.map( name => ({ name }) )

const editSchool = (schools, oldSchool, newSchool) => {
    return schools.map ( school => (
        school.name === oldSchool ?
        ( { ...school, newSchool } ) :
        school
    ))
}

describe('data transformations ', () => {
    test('join', () => {
        expect(schools.join(', ')).toBe('Yorktown, Washington & Lee, Wakefield')
    })

    // .filter takes one argument - a PREDICATE - a function that
    // returns true or false
    test('W 2 Schools', () => {
        expect(schools.filter( school => school[0] === 'W'))
            .toEqual([ 'Washington & Lee', 'Wakefield' ])
    })

    //use array.filter over .pop or .splice to remove items from arrays
    test('removing items', () =>{
        let shortSchools = immuPop(schools)
        expect(shortSchools.length).toBe(2)
        expect(shortSchools[0]).toBe('Yorktown')
        expect(shortSchools[1]).toBe('Washington & Lee')
        expect(shortSchools.includes('Wakefield')).toBe(false)
        expect(schools.length).toBe(3)
    })

    // use the spread operator and pop
    test('removing items with spreads', () =>{
        let shortSchools = immuPop2(schools)
        expect(shortSchools.length).toBe(2)
        expect(shortSchools[0]).toBe('Yorktown')
        expect(shortSchools[1]).toBe('Washington & Lee')
        expect(shortSchools.includes('Wakefield')).toBe(false)
        expect(schools.length).toBe(3)
    })

    //using map to transform copied arrays
    test('creating high schools', () => {
        let highSchools = makeHigh(schools)
        expect(highSchools).toBeInstanceOf(Array)
        highSchools.forEach( school => {
            expect(school).toMatch(/High School/)
        })
    })

    // map can be used to return objects, arrays, values or other functions
    // this is an example of returning an object for every school
    test('transforming an array of values to an array of objects', () => {
        let schoolObjects = objectifySchools(schools)
        schoolObjects.forEach(
            obj => expect( obj ).toEqual( {name: obj.name} )
        )
        for ( let school in schoolObjects) {
            expect( schoolObjects[ school ].name ).toBe( schools[ school ] )
        }
    })

    //using map to transform one element of the array
    test('using map to change one value of an array of objects', () => {
        let schoolObjects = objectifySchools(schools)
        let updatedSchools = editSchool(schoolObjects, 'Washington & Lee', 'Dundee')
        expect(updatedSchools).toBeInstanceOf(Array)
        expect(updatedSchools.length).toBe(schoolObjects.length)
        expect(updatedSchools).not.toEqual(schoolObjects)
        for (let school in schoolObjects){(
            school == 1 ?
            expect( updatedSchools[ school ] ).not.toEqual( schoolObjects[ school ] ) :
            expect( updatedSchools[ school ]).toEqual( schoolObjects[ school ] )
        )}
    })
})
