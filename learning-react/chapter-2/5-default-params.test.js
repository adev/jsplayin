
let numFun = (num = 27) =>  num
let strFun = (str = 'yeehah') => str
let arrFun = (arr = ['silly', 'stupid', 'daft']) => arr
let objFun = (obj = {first: 'John', second: 'Smith'}) => {
  obj.full = `${obj.first} ${obj.second}`
  return obj
}

describe ('default-params', () => {
  test ('numbers', () => {
    expect(numFun()).toBe(27)
  })
  test ('string', () => {
    expect(strFun()).toBe('yeehah')
    expect(strFun()).toMatch(/ee/)
    expect(strFun()).toMatch('yeehah')
  })
  test ('array', () => {
    expect(arrFun()).toEqual(['silly', 'stupid', 'daft'])
    expect(arrFun()).toBeInstanceOf(Array)
    expect(arrFun()).toContain('daft')
  })
  test ('simple object', () => {
    expect(objFun()).toEqual({first: 'John', second: 'Smith', full: 'John Smith'})
  })
})
