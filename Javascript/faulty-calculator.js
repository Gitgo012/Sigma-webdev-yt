let random = Math.random();
console.log(random);
let a = parseFloat(prompt("Enter the 1st number: ")); 
let b = parseFloat(prompt("Enter the 2nd number: ")); 
let c = prompt("Enter the operation to perform (+, -, *, /):");

if (random < 0.1) {
  if (c === "+") {
    c = "-";
  } else if (c === "*") {
    c = "+";
  } else if (c === "-") {
    c = "/";
  } else if (c === "/") {
    c = "**"; 
  } else {
    console.log("Wrong operation entered");
    throw new Error("Invalid operation");
  }
}
function calculate() {
  try {
    return alert(`The answer is: ${eval(`${a} ${c} ${b}`)}`); 
  } catch (error) {
    return "An error occurred during calculation";
  }
}

console.log(calculate());
