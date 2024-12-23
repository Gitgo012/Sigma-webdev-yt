 
// async function sleep(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() =>{
//             resolve(45)
//         },1000)
//     })
// }
// async function main() {
//     let a = await sleep()
//     console.log(a)
//     //the ...rest is called destructuring in terms of an array
//     let [x,y, ...rest]=[1,2,3,4,5,6,7,8]
//     console.log(x,y,rest)
//     //we can also destructure an object in js. it is shown below
//     let obj={
//         name:"yash",
//         age:19,
//         smoke:"sometimes",
//         parents:"yes",
//         siblings:"yes",
//         girlfriend:"yes",
//         dinner_done:"not yet"
//     }
//     const {name,age,...rem}=obj
//     console.log(name,age,rem)
// } 

// main()

// //spread operator
// function sum(a,b,c){
//     return a+b+c
// }
// let arr=[1,2,13]
// console.log(sum(arr[0]+arr[1]+arr[2]))
// console.log(sum(...arr))


// let arr3=[1,2,3,4]
// let arr2=[5,6,7]
// arr4=[...arr3]
// arr4.push(9)
// console.log(arr4)
// console.log(arr3)
// console.log(...arr3,...arr2)