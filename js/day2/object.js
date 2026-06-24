let obj ={
    name: "Teja",
    age: 22,
    greet: function(){
        console.log("Hello");
    }
}

// console.log(obj);
// console.log(obj.name);
// console.log(obj.age);
// obj.greet();


for( k in obj){
    console.log(k,obj[k]);
}