function doSomething(cb){
    console.log("Do something.....")
    cb()
}
const nextStep = ()=>{
    console.log("Callback called")
}

// doSomething(nextStep)

const calculateNameLength = (name,cb) =>{
    const length = name.length;
    cb(length)
}
calculateNameLength("Ashutosh",(length)=>{console.log("The length is" + length)})