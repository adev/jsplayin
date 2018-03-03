const terrors = require('./11-errors')

test('throws an error every time you say bananas',() => {
    function tterrors(){
        terrors('bananas');
    }
    expect(tterrors).toThrowError('These errors drive me bananas');
    expect(tterrors).toThrow(/bananas/);
});
