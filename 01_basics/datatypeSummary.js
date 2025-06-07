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

console.log(typeof bigNumber)

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

