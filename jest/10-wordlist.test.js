const wordlist = require('./10-wordlist');

test('gets an array of words from a sentence', () => {
    result = wordlist('gets an array of words from a sentence')
    expect(result).toHaveLength(8);
    expect(result).toContain('array');
    expect(result).toContain('gets');
    expect(result).toContain('sentence');
});
