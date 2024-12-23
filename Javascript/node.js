function nice(name){
    console.log("Hey, " + name + " you are nice!");
    console.log("Hey, " + name + " you are awesome!");
    console.log("Hey, " + name + " you tshirt is also nice!");
    console.log("Hey, " + name + " your course is also good!");
}
function sum(a,b,c=6){
    return a*b+c;
}
console.log(sum(4,7));
console.log(sum(7,8,9));
console.log(sum(2,6,8));
console.log(sum(7,8,9));
// const arrowFnc = (a,b,c=6)=>
//     {return a*b+c};

// console.log(arrowFnc(4,7));
// console.log(arrowFnc(7,8,9));
// console.log(arrowFnc(2,6,8));
// console.log(arrowFnc(7,8,9));

const fnc=(a,b) =>a-b;

console.log(fnc(5,7));