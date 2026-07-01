// Student Management System

type Student = {
    id: number;
    name: string;
    age: number;
    course: string;
};

let students: Student[] = [];



function addStudent(student: Student): void {
    students.push(student);
    console.log("Student Added Successfully");
}




function showStudents(): void {

    if (students.length === 0) {
        console.log("No Students Found");
        return;
    }

    console.log("\nStudent List");

    for (let i = 0; i < students.length; i++) {
        console.log(students[i]);
    }
}




function findStudent(id: number): void {

    let found = false;

    for (let i = 0; i < students.length; i++) {

        if (students[i].id === id) {
            console.log("Student Found");
            console.log(students[i]);
            found = true;
            break;
        }

    }

    if (!found) {
        console.log("Student Not Found");
    }
}




function updateStudent(id: number, newName: string, newAge: number, newCourse: string): void {

    let found = false;

    for (let i = 0; i < students.length; i++) {

        if (students[i].id === id) {

            students[i].name = newName;
            students[i].age = newAge;
            students[i].course = newCourse;

            console.log("Student Updated");
            found = true;
            break;
        }
    }

    if (!found) {
        console.log("Student Not Found");
    }
}



function deleteStudent(id: number): void {

    let found = false;

    for (let i = 0; i < students.length; i++) {

        if (students[i].id === id) {

            students.splice(i, 1);

            console.log("Student Deleted");
            found = true;
            break;
        }
    }

    if (!found) {
        console.log("Student Not Found");
    }
}



// Add Students
addStudent({
    id: 1,
    name: "Teja",
    age: 21,
    course: "CSE"
});

addStudent({
    id: 2,
    name: "sai",
    age: 20,
    course: "ECE"
});

addStudent({
    id: 3,
    name: "Anjali",
    age: 22,
    course: "IT"
});



showStudents();



findStudent(2);


updateStudent(2, "varada", 21, "Computer Science");



showStudents();


deleteStudent(1);



showStudents();