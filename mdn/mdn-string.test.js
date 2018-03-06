const mdnstring = require('./mdn-string');
let text = 'the quick brown fox jumps over the lazy dog';

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
    test('true if matches case', () => {
        expect(mdnstring.contains('fox', text)).toBe(true);
    });
    test('false if doesnt match case', () => {
        expect(mdnstring.contains('Fox', text)).toBe(false)
    });
});

describe('String.prototype.endsWith()', () => {
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

describe('String.prototype.indexOf()',() => {
    test('find position of fox',()=>{
        expect(mdnstring.findPosition('fox', text)).toBe(16);
    });
    test('find position of the first the',()=>{
        expect(mdnstring.findPosition('the', text)).toBe(0);
    });
    test('finds the position of the second the',()=>{
        expect(mdnstring.findPosition('the', text, 3)).toBe(31);
    });
    test('fails to find DOG', () => {
        expect(mdnstring.findPosition('DOG', text)).toBe(false);
    });
});

describe('String.prototype.lastIndexOf()',()=>{
    //returns the last occurrence of a string within anothe string
    // optional fromIndex counts backwards from the end of the string
    test('find the position of the second the',()=>{
        expect(mdnstring.lastIndexOf(text, 'the')).toBe(31)
    });
    test('find the position of the first the (searching the first half of the text)',()=>{
        expect(mdnstring.lastIndexOf(text, 'the', 21)).toBe(0)
    });
    test('case sensitive - dont find THE',()=>{
        expect(mdnstring.lastIndexOf(text, 'THE', 20)).toBe(false)
    });
});

//test('', () => { false });
