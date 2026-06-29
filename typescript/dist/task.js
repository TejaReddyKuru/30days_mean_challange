"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=task.js.map