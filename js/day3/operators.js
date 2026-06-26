
let arr = [1,2,3,4,5,6,7,8,9];
let arr2 = [1,2,3,5,6,7,8,9];
console.log(...arr);
console.log(...arr,...arr2);

let obj1={
    age:25,
    city:{
        name:"New York"
    }
}
// let obj2={...obj1}; //drwabacks
//let obj2=Object.assign({},obj1); //shallow copy
let obj2=structuredClone(obj1); //deep copy
obj1.age=30;
obj2.city.name="Los Angeles";
console.log(obj1); // { city: { name: 'Los Angeles' }, age: 30 } why? because the spread operator creates a shallow copy of obj1.
console.log(obj2); // { city: { name: 'Los Angeles' }, age: 25 } why? because obj2 is a shallow copy of obj1, and both obj1 
                  // and obj2 share the same reference to the nested city object.


