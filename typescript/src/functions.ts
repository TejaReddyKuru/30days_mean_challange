type Student = {
    id: number;
    name: string;
};

type Teacher = {
    id: number;
    subject: string;
};

type Person = Student | Teacher;

function display(person: Person) {
    console.log(person.id);

    if ("name" in person) {
        console.log("Student Name:", person.name);
    }

    if ("subject" in person) {
        console.log("Teacher Subject:", person.subject);
    }
}

const s1: Student = {
    id: 1,
    name: "Teja"
};

const t1: Teacher = {
    id: 2,
    subject: "Math"
};

display(s1);
display(t1);