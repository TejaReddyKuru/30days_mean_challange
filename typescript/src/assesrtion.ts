type Book = {
    name:"String";
}

let bookstring =`{
    "Name": "The Great Gatsby"
}`

let objectbook = JSON.parse(bookstring) as Book;

console.log(objectbook);


//as is a Type Assertion operator. It tells TypeScript to treat a value as a specific type without changing the actual value.