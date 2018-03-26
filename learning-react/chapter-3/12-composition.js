const capitalise = str => str.toUpperCase()

const urlFriendly = str => str.replace(/ /g, '-')

const bastardize = str => str.replace(/o/gi,'*')


var thestring = 'The quick brown fox jumped over the lazy dog'

console.log(
  capitalise( urlFriendly( bastardize(thestring)))
)

const stdlibCompose = str => {
  return str
    .toUpperCase()
    .replace(/ /g, '-')
    .replace(/o/gi,'*')
}

console.log(
  stdlibCompose(thestring)
)

const compose = (...fns) =>
  ( param ) => {
    return fns.reduce(
      (composed, fn) => fn(composed)
      , param
    )
  }

  const strFix = compose(
    capitalise,
    urlFriendly,
    bastardize
  )


  console.log(
    strFix(thestring)
  )
