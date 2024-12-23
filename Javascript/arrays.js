// let arr=[1,2,3,4,5]
// console.log(arr);
// console.log(arr.length); 
// console.log(arr.toString()); //temporarily converts the array to a string.//
// console.log(arr.join(' and '));
// console.log(typeof(arr));
// console.log(arr.push(6));
// console.log(arr)
// console.log("popped element is " + (arr.pop()))

// let str="yash";
// for (const i in str){
//     console.log(str[i]);
// }


// shift and unshift methods were also discused.

// shift ---> similar to arr.pop() ---> but it removes an element to the start. However, pop removes an element from the end.

// unshift ---> similar to arr.push() ---> Adds one or more elements to the beginning of an array and returns the new length of the array.


// let arr=[9,10,689,5,6];
// let arr2=[82,19,18];
// let arr3=[7,8,9];
// function concat(a,b,c){
//     let d=a.concat(b,c);
//     return d;
// }

// console.log(arr.concat(arr,arr2,arr3).sort((a,b) => a-b));

// let arr2=arr.splice(0,2,14,11);
// console.log(arr);
// console.log(arr2);


// let arr4=arr.slice(0,4);

// console.log(arr4.reverse());


//REMAINING CONCEPTS ARE REGARDING LOOPS FOR ARRAYS IN JS. WATCH THEM TONIGHT (IF POSSIBLE).


//FOR EACH LOOP FOR Arrays://
let a=[91,1,2,4,6,1];
a.forEach((value) => {
    console.log(value);
});

//FOR IN LOOP FOR ARRAYS://
let b={name:"yash",age:"19"};
for (const key in b) {
        const c = key +" : "+ b[key];
        console.log(c)
}

//square IN ARRAYS://
let arr=[1,2,3,4,5,6,7,8,9,10]
let squaredArr=[]
function square(arr){
    arr.forEach(element => {
        squaredArr.push(element**2);
    });
    return squaredArr;
}
console.log(square(arr));

//MAP IN ARRAYS//
let newArr = arr.map((e) =>{
    return e ** 2;
})

console.log(newArr);

//FILTER IN ARRAYS//

console.log(arr.filter((e)=>{
    if (e>7){
        return true
    }
    else{
        return false
    }
}));

const add = (a,b)=> a+b;
let sum=arr.reduce(add);
console.log(sum);

let str="yash";
let arr2= Array.from(str);
console.log(arr2)

//Sorting an array//
let arr3=[5,1,23,18,17,3]
console.log(arr.sort((a,b) =>{
    return a-b;
}));