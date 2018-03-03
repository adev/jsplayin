const subtraction = require('./1-subtraction')

test('takes 4 away from 10 to equal 6', () =>{
    expect(subtraction(10,4)).toBe(6);
});
