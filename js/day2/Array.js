let a = ["hello",24,true];

a.push("world");
a.shift();
a.unshift("hi");

for(let i=0;i<a.length;i++){
    console.log(a[i]);
}
let c= 1;
do{
    c++;
    console.log(c)
}while(c<=10);