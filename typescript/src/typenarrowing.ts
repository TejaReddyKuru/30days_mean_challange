// function servechai(msg?:string){
//     if(msg){
//         return `servingchai ${msg}`
//     }
//     else{
//         return 'Default chai';
//     }
// }

// console.log(servechai("sangam"));
// console.log(servechai());
// /Type narrowing in TypeScript is the process of reducing a variable's broad type to a more specific type based on runtime checks.


// msg?: string means msg is optional.
// If omitted, its value is undefined.
// TypeScript internally treats it as string | undefined.
// You typically check whether msg exists before using it.   


type chaiOrder = {
    type: string
    sugar :number
};

 
function isChaiOrder(obj:any):obj is chaiOrder{
    return(
        typeof obj  === "object" &&
        obj!== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

// function serveOrder(item:chaiOrder|string){
//     if(isChaiOrder(item)){
//         return `serving ${item.type} chai with ${item.sugar}`
//     }
//     return `serving coustom chai ${item}`
// }