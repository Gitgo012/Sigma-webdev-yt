let a = prompt("Enter 1st number");

let b=prompt("Enter 2nd number");
if (isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed");
}
sum = parseFloat(a)+parseFloat(b)
try {
    console.log(`Sum is ${sum*x}`)
} catch (error) {
    alert(error.name)
    alert(error.message)
    alert(error.stack)
    console.log("error spotted")
}
finally{
    console.log("connection is getting closed")   
}