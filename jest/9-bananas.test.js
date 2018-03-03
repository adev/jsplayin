const bananas = require('./9-bananas');

test('get bananas when calling bananas(string)', () =>{
    let text = 'this is a long and meaningless string of stuff that doesnt mention long yellow fruit'.split(' ');
    text.forEach((word) => {
        expect(bananas(word)).toMatch(/bananas/)
    });
});
