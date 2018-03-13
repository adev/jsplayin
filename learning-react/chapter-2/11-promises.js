/*
MDN: Essentially, a promise is a returned object to which you attach callbacks,
instead of passing callbacks into a function.

    let promise = doSomething()  //doSomething() returns a promise
    promise.then(successCallback, failureCallback)

or more simply:

    doSomething().then(successCallback, failureCallback)

the then function returns another promise (that of the succes or fail callback) e.g.

    let promise2 = doSomething().then(successCallback, failureCallback)

promise2 won't be set until doSomething AND the success/fail callback is returned

*/

console.log(
    'See my learning here: ' +
    'mdn/javascript-guide/03-control-flow-and-error-handling/promises.test.js'
)
