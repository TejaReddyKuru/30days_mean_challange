type A = {
    name:string
}

type b ={
    age: number
}

type c = A & b;
type d = A | b;
let user: c = {
    name: "John",
    age: 30

};

let user1: d = {
    name: "John"
};

console.log(user);