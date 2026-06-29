"use strict";
// // let msg:String = "Hello world";
// // console.log(msg);
Object.defineProperty(exports, "__esModule", { value: true });
// // let msg2:String = "Hello world2";
// // console.log(msg2);
// // let a = true;
// // console.log(a);
// let b:unknown="Hello";
// console.log(typeof(b));
// console.log(b);
// console.log(typeof(b));
// b=1;
// console.log(b);
// console.log(typeof(b));
// b=true;
// console.log(b);
// console.log(typeof(b));
// // console.log(b.toUpperCase());
// let a = ["hi","hello"];  //type infrence
// console.log(typeof(a));
// console.log(a);
// let student:any =["Teja",3,"Sai",5];
// console.log(student);
// let array:(number|string)[] =[1,2,"Teja"];
// console.log(array);
// let array2:(unknown)[]= [1,2,"Teja"];
// console.log(array2);
// enum Colour{
//     red ,
//     Green,
//     Blue
// }
// let c :Colour = Colour.Green;
// console.log(Colour);
// let exam :readonly any[]=["hi",2,"Hello"];
// console.log(exam); 
let student = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = [];
let odd = [];
console.log("main array:", student);
for (let i = 0; i < student.length; i++) {
    if (student[i] % 2 == 0) {
        even.push(student[i]);
    }
    else {
        odd.push(student[i]);
    }
}
console.log("Even Array:", even);
console.log("Odd Array:", odd);
//# sourceMappingURL=first.js.map