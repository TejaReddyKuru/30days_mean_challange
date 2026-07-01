// // function servechai(msg?:string){
// //     if(msg){
// //         return `servingchai ${msg}`
// //     }
// //     else{
// //         return 'Default chai';
// //     }
// // }

// // console.log(servechai("sangam"));
// // console.log(servechai());
// // /Type narrowing in TypeScript is the process of reducing a variable's broad type to a more specific type based on runtime checks.


// // msg?: string means msg is optional.
// // If omitted, its value is undefined.
// // TypeScript internally treats it as string | undefined.
// // You typically check whether msg exists before using it.   


// type chaiOrder = {
//     type: string
//     sugar :number
// };

 
// function isChaiOrder(obj:any):obj is chaiOrder{
//     return(
//         typeof obj  === "object" &&
//         obj!== null &&
//         typeof obj.type === "string" &&
//         typeof obj.sugar === "number"
//     )
// }

// // function serveOrder(item:chaiOrder|string){
// //     if(isChaiOrder(item)){
// //         return `serving ${item.type} chai with ${item.sugar}`
// //     }
// //     return `serving coustom chai ${item}`
// // }




// function Book(t:string|number){
//     if(typeof t === "string"){
//         console.log(`serving ${t}`);
//     }
//     else{
//         console.log(`serving ${t} pages`);
//     }
// }

// Book("you can win" );
// Book(200);


type bookType = {
    title: string;
    price: number;
}

function BookOrder(item: bookType) {
    console.log(`serving ${item.title} for ${item.price}`);
}

function isBookOrder(obj:any):obj is bookType{

    return(
    
        typeof obj ==="object" &&
        obj !== null &&
        typeof obj.title === "string" &&
        typeof obj.price === "number"
    )
   
}
function serveBookOrder( item: bookType ):void{
    if(isBookOrder(item)){
        console.log(`serving ${item.title} for ${item.price}`);
    }
    else{
        console.log("Invalid Book Order");
    }
}

// let laibery: bookType[] = [];

// function addBookOrder(item: bookType): void {
//     laibery.push(item);
//     console.log("Book Order Added ");
// }   

// addBookOrder({title: "you can win", price: 200});

// addBookOrder({title: "Rich Dad Poor Dad", price: 300});

// addBookOrder({title: "The Alchemist", price: 250});

// console.log(laibery);

// isBookOrder({laibery});

serveBookOrder({title: "you can win", price: 200});