const notnum = require('./4-notnum');

test('Pass in 4 and dont get 4 back', () => {
    expect(notnum(4)).not.toBe(4);
});
