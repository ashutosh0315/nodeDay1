// function doSomething(cb){
//     console.log("Do something.....")
//     cb()
// }
// const nextStep = ()=>{
//     console.log("Callback called")
// }

// doSomething(nextStep)

const calculateNameLength = (name,cb) =>{
    const length = name.length;
    cb(length)
}
// calculateNameLength("Ashutosh",(length)=>{console.log("The length is" + length)})

//timers and intervals
// console.log("before the setTimeout")
// var secondsInMilliSeconds = 1000
// setTimeout(()=>{console.log("a second has passed")},secondsInMilliSeconds)
// console.log("after the setTimeout")

// var secondsInMilliSeconds = 1000
// let totalExecution = 0;
// console.log('before setInterval')
// setInterval(()=>{
//     totalExecution++;
//     console.log(`a second has passed this is the ${totalExecution} execution`)
// },secondsInMilliSeconds)
// console.log('after setInterval')

//error first callbacks


const doSomething = (cb)=>{
    const error = new Error("Something went wrong");
    cb(error,null)
    
}


doSomething((error=false,result)=>{
    if(error){
        console.log("There was an error")
        return;
    }
    console.log("Result:", result)
    console.log("Everything went well")

})

