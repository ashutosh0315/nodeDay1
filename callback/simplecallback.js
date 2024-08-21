// // function doSomething(cb){
// //     console.log("Do something.....")
// //     cb()
// // }
// // const nextStep = ()=>{
// //     console.log("Callback called")
// // }

// // doSomething(nextStep)

// const calculateNameLength = (name,cb) =>{
//     const length = name.length;
//     cb(length)
// }
// // calculateNameLength("Ashutosh",(length)=>{console.log("The length is" + length)})

// //timers and intervals
// // console.log("before the setTimeout")
// // var secondsInMilliSeconds = 1000
// // setTimeout(()=>{console.log("a second has passed")},secondsInMilliSeconds)
// // console.log("after the setTimeout")

// // var secondsInMilliSeconds = 1000
// // let totalExecution = 0;
// // console.log('before setInterval')
// // setInterval(()=>{
// //     totalExecution++;
// //     console.log(`a second has passed this is the ${totalExecution} execution`)
// // },secondsInMilliSeconds)
// // console.log('after setInterval')

// //error first callbacks


// const doSomething = (cb)=>{
//     const error = new Error("Something went wrong");
//     cb(error,null)
    
// }


// doSomething((error=false,result)=>{
//     if(error){
//         console.log("There was an error")
//         return;
//     }
//     console.log("Result:", result)
//     console.log("Everything went well")

// })


// const randomTimeOutPromise = () => {
//     return new Promise((resolve, reject) => {
//         const time = Math.floor(Math.random() * 1000);
//         setTimeout(() => {
//             console.log(`Promise Resolved in ${time}ms`)
//             resolve(time);
//         }, time);
//     })
// }

// Promise.race([
//     randomTimeOutPromise(),
//     randomTimeOutPromise(),
//     randomTimeOutPromise(),
//     randomTimeOutPromise(),
//     randomTimeOutPromise(),
// ]).then((result) => {
//     console.log("Result from Race : ", result);
// });

// const generatePromise = shouldFail => {
//     return new Promise((resolve, reject) => {
//         if(shouldFail) {
//             return reject(new Error("Rejected!"));
//         }
//         resolve("Success!");
//     });
// };

// generatePromise(true).catch(error => console.log("Error message: ", error));


// generatePromise()
// .then(generatePromise)
// .then(result => {

// return generatePromise(true);
// })
// .then(() => console.log("This will be called"))
// .catch(error => console.log("Error message: ",error))

const fetchData = async() =>{
    try{
        const response = await fetch('https://api.demo.foo/v1/todo');
        const json = await response.json();
        console.log(json);
    }
    catch(error){
        console.log(error);
    }
  }
  
  fetchData()
  
//   const generatePromise = shouldFail => {
//     return new Promise((resolve, reject) => {
//         if(shouldFail) {
//             return reject(new Error("Rejected!"));
//         }
//         resolve("Success!");
//     });
//   };
  
//   generatePromise(true)
//   .then(result => console.log("Result: ", result))
//   .catch(error => console.log("Error message: ", error.message))
//   .finally(() => console.log("Promis settled"));

