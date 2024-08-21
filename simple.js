const {add,pi,message} = require('./calculator')
console.log('welcome')
console.log(message)

let addResult = add(5,6)
console.log("Add result" + addResult)
let area = pi * 3*3
console.log("Area" +area)
//to import es6 module dynamically
import ('./calces6module.mjs').then(
    es =>{ console.log(es.default)
        console.log(es.Multiply(10,3))
    }
)

async function divide(){
    const es6module = await import('./calces6module.mjs')
    const result = await es6module.Division(100,5)
    console.log("division result" +result)
}
divide()