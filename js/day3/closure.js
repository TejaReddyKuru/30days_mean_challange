// function outer() {
//     let count = 0;

//     function inner() {
//         count++;
//         console.log(count);
//     }

//     return inner;
// }

// const counter = outer();

// counter(); 
// counter(); 
// counter(); 
function BankAccount(){
    let balance=0;  
    return function deposit(){
        balance+=1500;
        console.log(balance);
        console.log("My Balance is: "+balance);
    }
}
let user=BankAccount();
user();
user();
user();