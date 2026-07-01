// let a:number|string = "eat";

// if(typeof a === "string"){
//     console.log(a.toUpperCase());
// }   

//use of type of 


//use of instance of 

class Dog {
    bark() {
        console.log("Bow Bow");
    }
}

class Cat {
    meow() {
        console.log("Meow");
    }
}

function animal(a: Dog | Cat) {

    if (a instanceof Dog) {
        a.bark();
    } else {
        a.meow();
    }
}

animal(new Dog());

animal(new Cat());