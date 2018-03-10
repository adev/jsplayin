/*
Javascript modules are stroing in separate files, one file per module. There
are two options when creating and exporting a module: you can export multiple
javascript objects from a single module, or one object per module.

After digging around - I like this explanation of the options best.

https://jaketrent.com/post/mixing-module-exports-exports/

Personally - I think I'll stick with module exports for the minute - it the pattern
for Common JS (node) and with Babel and Webpack for browser work.
*/
module.exports = () => 'I like modules'
module.exports.sayMyName = name => `here's ${name}!!`
module.exports.counter = number => number + 1
module.exports.SOMECONSTANT = 'SOMETHING'
