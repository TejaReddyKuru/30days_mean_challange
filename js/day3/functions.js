let f= function sayHello(){
    console.log("Hello");
}

let f1= function sayHello(){
    function add(a,b){
        console.log(a+b);
    }
    return add;
}
f1()(6,10); // 16 why? because f1 is a function that returns another function add. When we call f1(), it returns the add function,
            // and then we immediately invoke that returned function with the arguments 6 and 10,
            //  resulting in the sum of 16 being logged to the console.

const arr=[
    function(a,b){
        console.log(a+b);
    },
    function(a,b){
        console.log(a-b);
    },
    function(a,b){
        console.log(a*b);
    }

]
// console.log(arr[0](5,10)); //Not recommended for developers but it works.
// console.log(arr[1](5,10)); //Not recommended for developers but it works.
// console.log(arr[2](5,10)); //Not recommended for developers but it works.
let f2= arr[0];
let f3= arr[1];
let f4= arr[2];
f2(5,10);
f3(5,10);
f4(5,10);


,functions.js file