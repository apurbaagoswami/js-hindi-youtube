// node 04_Control_flow/truthy.js

const userEmail = [] 

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("DOnt have user email");
}

//  FALSY VALUE  :-
// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

// TRUTHY VALUES :-
// true , "0" , 'false' , [] , () , {} , " ", function(){}

//checking the array if is empty

if (userEmail.length === 0 ) {
    console.log("Array is empty");
    
}

// check is a object is empty

const emoObj = {}

if (Object.keys(emoObj).length === 0 ){
    console.log("Object is empty");
}

// Nullish  Coalescing Operator (??): null undefined

let val1 ;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 15

console.log(val1); //5

//Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");
