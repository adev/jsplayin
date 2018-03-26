const userLog = username => message => username + ': ' + message

test('currying', () => {
    let myLog = userLog('Andy')
    expect(myLog('something interesting')).toBe('Andy: something interesting')
    expect(myLog('something else interesting')).toBe('Andy: something else interesting')
    myLog = userLog('Bob')
    expect(myLog('something interesting')).toBe('Bob: something interesting')
    expect(myLog('something else interesting')).toBe('Bob: something else interesting')
})
