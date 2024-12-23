let obj={
    name:"yash",
    age:213
}
console.log(obj)

let animal={
    eats:true
}

let rabbit={
    jumps:true
}
rabbit.__proto__=animal
//  sets rabbit.[[Prototype]] = animal
console.log(animal)
console.log(rabbit)


class animal2{
    constructor(name){
        this.name=name;
        console.log("object has been created...")
    }

    eats(){
        console.log("kha raha hu...")
    }

    jumps(){
        console.log("kood raha hu...")
    }
}

// extends is used for the process of inheritance of classes
class Lion extends animal{
    // constructor is used to initialize a class when its object is created. it gets assigned by default as well if we dont explicitly do so
    constructor(name){
        // super keyword is used to access the parent class. this is important because we are using the animal class by extends keyword and super keyword helps us in initializing its properties when it is being extended.
        super(name);
        // sets the property of Object.name=name parameter being passed.
        this.name=name;
        console.log("object has been created and his name is shera...")
    }
    // this below is an example of is an example of method overriding
    eats(){
        // we are using super keyword to initialize the parent class and then we are calling the parent class's eats function.
        super.eats();
        console.log('sher hu mei lawde khaane de chup chap!')
    }
}
// this shows us the process of creating an object for a class.
let a=new animal('yash');
console.log(a)

let b=new Lion('shera')
console.log(b)

//using getter and setter methods


class user{
    constructor(name){
        this._name=name
    }

    get name(){
        return this._name
    }

    set name(value){
        if(value.length <4){
            console.log("name is too short")
            return 
        }
        this._name=value;
    }
}

let yash=new user("lakkadbagha")
console.log(yash.name)

//instance of operator is also useful. it tells whether the object is an instance of a class or not. it also returns true if the object is instance of a class that has been  created by extending another class.