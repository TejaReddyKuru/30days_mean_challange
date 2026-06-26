// function greet(name){
//     console.log("Hello"+name);
// }

// function processUser(callback){
//     let name = "Teja";
//     callback(name);
// }

// processUser(greet);


function greet(name){
    console.log("Hello"+name);
}

function imp(callback){
    let name ="Teja";
    callback(name);
}

imp(greet);