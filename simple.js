const {add,pi,message} = require('./calculator')
console.log('welcome')
console.log(message)

let addResult = add(5,6)
console.log("Add result" + addResult)
let area = pi * 3*3
console.log("Area" +area)