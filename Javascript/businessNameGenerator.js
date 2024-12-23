//Adjectives allowed: Crazy, Amazing, Fire//
//Shop name: Engine, Foods, Garments//
//Another Word: Bros, Limited, Hub//
//NOTE: DON'T USE ARRAYS, USE OF STRINGS IS ONLY ALLOWED//
//1/3= 0.33 0.66 0.99//
let adj,shopName,anotherWord;
let random=Math.random();
function randomNameGenerator(random){
    if (random<0.34){
        adj="Crazy";
        shopName="Engine";
        anotherWord="Bros";
        return (`Your random business name is: ${adj} ${shopName} ${anotherWord}`)
    }
    else if (random > 0.33 && random<0.67){
        adj="Amazing",
        shopName="Foods",
        anotherWord="Limited"
        return (`Your random business name is: ${adj} ${shopName} ${anotherWord}`)
    }
    else{
        adj="Fire",
        shopName="Garments",
        anotherWord="Hub"
        return (`Your random business name is: ${adj} ${shopName} ${anotherWord}`)
    }
}
console.log(random);
console.log(randomNameGenerator(random));

//Using Arrays//
let arr1= ["Crazy", "Amazing", "Fire"];
let arr2= ["Engine", "Foods", "Garments"];
let arr3= ["Bros", "Limited", "Hub"];
let randomNumber=Math.floor(Math.random()*3);
console.log (`Your random business name is: ${arr1[randomNumber]} ${arr2[randomNumber]} ${arr3[randomNumber]}`);




