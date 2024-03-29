let obj = {
    a : 1,
    b : "Harry"
}
console.log(obj)

// What is prototype ? -> Additional properties of an object. But we can not just create prototypes for each object. We need something better, that is why we go with classes.
let animal = {
    eats: true
};
let rabbit = {
    jumps: true
};
rabbit.__proto__ = animal // sets rabbit.[[prototype]] = animal

class Animal {
    constructor(name) {
        this.name = name
        console.log("Object is created...") // Constructor will run every time when the object is called.
    } 
    eats() {
        console.log("Kha raha hoon")
    }
    jumps() {
        console.log("Kood raha hoon")
    }
}
class Lion extends Animal {
    // Inheritance.
    constructor(name) {
        super(name) // We must also call the constructor of Inherited class.
        // this.name = name
        console.log("Object of lion is created.")
    }
    eats() { // Method overriding.
        super.eats() // Here it is just optional when we also wants the class which has eats() method which we are overriding, should also be called.   
        console.log("Roarr....")
    }
}
let a = new Animal("Bunn");
console.log(a)
let l = new Lion("Shera")
console.log(l)
