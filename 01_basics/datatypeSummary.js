/*
  ********PRIMITIVE********

  7 TYPES : String , Number ( here no float value ), Boolean , Null , Undefined ,
   Symbol(to make variable unique) , BigInt (scientific value) */

   // symbol to store unique ID
const id = Symbol('123')
const anotherId = Symbol ('123')

console.log(id == anotherId);

const bigNumber = 15634518642896846118n // to represent big number we use bigInt (n) at last

/*  
 *********REFERENCE TYPE (NON-PREMITIVE)*********

   1. Arrays
   2.Objects
   3.Functions
*/
const heros = ["Shaktiman" , "Nagraj" , "Doga"] //array

let myObj = {
    name :"Apurbaa",
    age: 19,
    place: "jajpur",
} //Object

const myFunction = function(){
    console.log("helllo world");
}

// console.log(typeof bigNumber)

/*
if we will check the data type function of the following as values of variable we will get
undefined = undefined
Null = object
boolean = boolean
Number = number
string = string
object (native and does not implement[[Call]]) = object
object (native or host and  does implement[[Call]]) = function
object (host and does not implement[[Call]]) = implemination defined except maynot be undefined
  */



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// There are two typws of memories (1) STACK (primitive) in stack we gwt the copy 
//                                 (2) HEAP (non-primitive) in heap we get the reference it means everything-
//                                                         - is done on the original value


//example of STACK :-
let myYoutubeName = "apurbaadotcom"
let anotherName = myYoutubeName
anotherName  = "chaiaurcode"
console.log(myYoutubeName);
console.log(anotherName);

//Example of HEAP :-
let userOne = {
  email : "user@gole.com",
  upi : "user@sbi"
}

let usertwo = userOne

usertwo.email = "apurbaa@goswami.com"

console.log(userOne.email);
console.log(usertwo.email);

