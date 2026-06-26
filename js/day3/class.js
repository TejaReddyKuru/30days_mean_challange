class Abc {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

   
    get name() {
        return this._name;
    }

   
    set name(newName) {
        this._name = newName;
    }

    get age() {
        return this._age;
    }

   
    set age(newAge) {
        if (newAge > 0) {
            this._age = newAge;
        } else {
            console.log("Age must be positive");
        }
    }

    greet() {
        console.log(`Hello ${this._name} and ${this._age}`);
    }
}

let abc1 = new Abc("Teja", -22);

abc1.greet(); 


console.log(abc1.name); 
console.log(abc1.age);  


abc1.name = "Reddy";
abc1.age = -23;

abc1.greet(); 
