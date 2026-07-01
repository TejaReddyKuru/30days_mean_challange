//add student
//find student by rool 
//show the student details 


type Student = {
    id: number;
    name: string;
};

let students: Student[] = [];

// Add Student
function addStudent(student: Student) {
    students.push(student);
}


function findStudent(id: number) {
    for (let i = 0; i < students.length; i++) {
        if (students[i]!.id == id) {
            return students[i];
        }
    }
   
}

function updateStudent(id: number, name: string) {
    for (let i = 0; i < students.length; i++) {
        if (students[i]!.id == id) {
            students[i]!.name = name;
            return;
        }
    }
}


addStudent({ id: 1, name: "Teja" });
addStudent({ id: 2, name: "sai" });




addStudent({id:1,name:"varun"});

function displayStudents() {
    for (let i = 0; i < students.length; i++) {
        console.log(`ID: ${students[i].id}, Name: ${students[i].name}`);
    }
}

displayStudents();