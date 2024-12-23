//Write a program to calculate factorial of a number using reduce and for loops and map//
//For loop//
// let arr1=parseFloat(prompt("Enter your number to find factorial for:"));
// let factorial=1
// for (let i=1;i<=arr1;i++){
//     factorial=factorial*i;
// }
// alert(factorial);

//FOR LOOPS AND NODE JS INPUT FORMAT//

// process.stdout.write("Enter the number you need factorial for: ")
// function factorial(number){
//     for (let i=1;i<=number;i++){
//         fact=fact*i;
//     }
//     return fact;
// }
// process.stdin.on("data", function(data) {
//     let n = parseFloat(data.toString().trim()); 
//     console.log("Your factorial is " + factorial(n));
//     process.exit();
// });

//USING REDUCE//
process.stdout.write("Enter your number: ")
function factorial(number){
    const arr=Array.from(Array(number+1).keys());
    const answer=arr.slice(1,).reduce((a,b)=> a*b);
    return answer;
}
process.stdin.on("data", function(data){
    let number=parseFloat(data.toString().trim());
    console.log(factorial(number));
    process.exit();
})
