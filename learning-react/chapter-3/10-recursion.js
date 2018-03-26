const countdown = (num, fn) => {
  fn(num)
  return (num > 0) ? countdown(num-1, fn) : num
}

const countdown2 = (num, fn) => {
  fn(num)
  return (num > 0)
    ? setTimeout( () => countdown2(num-1, fn), 1000)
    : 0
}

const log = val => console.log(val)

countdown2( 10, log)
