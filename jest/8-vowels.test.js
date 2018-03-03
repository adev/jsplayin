const remvowels = require('./8-vowels');

test('remove vowels from string = rmv vwls frm strng', () =>{
    expect(remvowels('remove vowels from string')).not.toMatch(/[aeoiuAEOIU]/);
});
