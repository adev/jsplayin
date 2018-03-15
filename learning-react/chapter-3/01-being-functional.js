/*
You may have noticed that you can declare functions with the var keyword the same
way you can declare strings, numbers or any other variable
*/

var log = function (message) {
  console.log(message)
}

log('In javascript functions are variables')

/*
This is a lot more compact with arrow functions
*/

const arrowLog = message => console.log(message)

arrowLog('This is a message from the arrowLog function')

/*
Since functions are variables we can add them to objects
*/

const obj = {
  message: 'They can be added to objects like variables',
  log (message) { console.log(message) }
}

obj.log(obj.message)

/*
We can also add functions to arrays in Javascript
*/

const messages = [
  'They can be inserted into arrays',
  message => console.log(message),
  'like variables',
  message => console.log(message)
]

messages[1](messages[0])
messages[3](messages[2])

/*
FUNCTIONS THAT TAKE FUNCTIONS AS ARGUMENTS OR RETURN FUNCTIONS ARE KNOWN AS
HIGHER ORDER FUNCTIONS

Functions can be sent to other functions as arguments, just like other variables
*/

const insideFn = logger => logger('They can be sent to other functions as arguments')
const upperer = text => text.toUpperCase()

insideFn(console.log)
console.log(insideFn(upperer))

/*
They can also be returned from other functions, just like variables
*/
// two arrows means that they are returning a function, in this case they are also
// taking a function as an argument
const createScream = callback => text => callback(text.toUpperCase() + '!!!')
const createWhisper = callback => text => callback('shhhh...' + text.toLowerCase())

const logger = message => console.log(message)
const repeater = message => message.repeat(2)

const screamLog = createScream(logger)
const whisperLog = createWhisper(logger)
const whisperScream = createScream(whisperLog)
const repeatWhisper = createWhisper(repeater)

const consoleScream = createScream(console.log)

var message = 'functions can be returned from other functions '

screamLog(message)
whisperLog(message)
whisperScream(message)
logger(repeatWhisper(message))
consoleScream(message)
