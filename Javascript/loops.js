// for (i=1;i<=10;i++){
//     console.log(i);
// }

// let i=1;
// while (i<100) {
//     console.log((i+1));
//     i++;
// }

let obj = {
    name:"panzer",
    role: "student",
    university: "IIT University",
    parent: {name: "bURGER",
            job: "CBI",
            POSITION: "DIRECTOR"
    }
}
let i=2
do {
    for (const key in obj) {
            const element = obj[key];
            console.log(key, ": " + element) ;
            i++;
        }
} while (i<2);
// function printAllKeys(obj, parentKey = '') {
//     for (let key in obj) {
//         if (typeof obj[key] === 'object' && obj[key] !== null) {
//             // If the property is an object, recursively call the function
//             printAllKeys(obj[key], key + '.');
//         } else {
//             // Print the key and value
//             console.log(parentKey + key + ": " + obj[key]);
//         }
//     }
// }

// printAllKeys(obj);

// for (const element of ['1','2','3']) {
//     console.log(element)
// }
// for (const element of ["yash","anmol","ranjan"]) {
//     console.log(element)
// }
// for (const element of "yash") {
//     console.log(element)
// }

