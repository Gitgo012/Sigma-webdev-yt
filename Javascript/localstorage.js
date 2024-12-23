if (localStorage.getItem("name")) {
    let a = localStorage.getItem("name");  // Declare 'a' with let
    document.write("Welcome " + a);
} else {
    let a = prompt("Enter your name");  // Declare 'a' with let
    localStorage.setItem("name", a);    // Save name in localStorage
    document.write("Welcome " + a);     // Show the welcome message after setting
}
//localstorage setItem ---> needs a string
//localstorage getItrem ---> can return either a string or an object
