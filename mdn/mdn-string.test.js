const mdnstring = require('./mdn-string');

describe('string.length property', () => {
    test('Tells you how many characters are in your name', () => {
        expect(mdnstring.lengthOfName('Slartibarfast')).toBe(13);
    });

    test('reduces the passed string to 5 characters', () => {
        expect(mdnstring.limitToFive('Slartibarfast')).toHaveLength(5);
    });
});

describe('String.prototype.charAt()', () => {
    let text = 'banana'; //6 chars

    test('gets the first character', () => {
        expect(mdnstring.getFirst(text)).toBe('b');
    });
    test('gets the nth chraracter', () => {
        expect(mdnstring.nthChar(text, 2)).toBe('n');
        expect(mdnstring.nthChar(text, 22)).toBe('');
    });
    test('gets the last character', () => {
        expect(mdnstring.getLast(text)).toBe('a');
    });
    test('gets the middle character(s) - even string', () => {
        expect(mdnstring.getMiddle(text)).toBe('na');
    });
    test('gets the middle character - odd string', () => {
        expect(mdnstring.getMiddle(text + 's')).toBe('a');
    });
});

describe('String.prototype.charCodeAt()',() => {
    let text = "ABC123<>?";
    test('charcode of first character', () => {
        expect(mdnstring.firstCharCode(text)).toBe(65); //A
    });
    test('charCode at specified location', () => {
        expect(mdnstring.chooseCharCode(text, 2)).toBe(67) //1
        expect(mdnstring.chooseCharCode(text, 22)).toBeFalsy();
    });
    test('array of charcodes', () => {
        let result  = mdnstring.listCharcodes(text);
        expect(result).toBeInstanceOf(Array);
        expect(result).toHaveLength(text.length);
        expect(result).toEqual([65, 66, 67, 49, 50, 51, 60, 62, 63]);
    });
    test('single charcode for single character', () => {
        expect(mdnstring.oneChar('A')).toBe(65);
    });
});

describe('String.prototype.includes()',()=>{
    let text = 'the quick brown fox jumps over the lazy dog.'
    test('true if matches case', () => {
        expect(mdnstring.contains('fox', text)).toBe(true);
    });
    test('false if doesnt match case', () => {
        expect(mdnstring.contains('Fox', text)).toBe(false)
    });
});

describe('String.prototype.endsWith()', () => {
    let text = 'the quick brown fox jumps over the lazy dog';
    let fox = 'brown fox';
    let dog = 'lazy dog'
    test('ends with lazy dog by default', () => {
        expect(mdnstring.checkEnd(dog, text)).toBe(true);
    });
    test('doesnt end with brown fox by default', () => {
        expect(mdnstring.checkEnd(fox, text)).toBe(false);
    });
    test('doesnt end with lazy dog if a length of 19 ', () => {
        expect(mdnstring.checkEnd(dog, text, 19)).toBe(false);
    });
    test('does end with brown fox if a length of 19', () => {
        expect(mdnstring.checkEnd(fox, text, 19)).toBe(true);
    });
});

//test('', () => { false });
