const truthy = require('./5-truthy');

test('Null for zero', () => {
    let result = truthy(0);
    expect(result).toBeNull();
    expect(result).toBeFalsy();
});

test('Lucky for 2', () => {
    let result = truthy(2);
    expect(result).toBe('lucky');
    expect(result).toBeDefined();
});

test('undefined for 15', () => {
    let result = truthy(15);
    expect(result).toBeUndefined();
    expect(result).toBeFalsy();
});
