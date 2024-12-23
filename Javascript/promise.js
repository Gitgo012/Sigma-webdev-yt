console.log('this is an example of how js promises work');
let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    
    if (a < 0.5) {
        reject("No, the random number was not supporting you");
    } else {
        setTimeout(() =>{
            console.log("yes i am done")
            resolve("harry")
        },3000);
    }
})
prom1.then((a) =>{
    console.log(a);
}).catch((err)=>{
    console.log(err)
})
//set timeout is an asynchronous js fnc which gets executed independently of the others and notify when they are done//
//synchronous js functions are those that get executed sequentially//