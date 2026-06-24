let check = (a) =>{

    if(typeof a !== "number"){
        throw new Error("Please enter a number");
    }
    else{
    if(a%2==0){
        console.log("Even");

    } else {
        console.log("Odd");
    }
}
}

check(456528);