// node 03_basics/03_arrow.js
const user = {
    username : "apurbaa",
    price : 999,

    welcomeMesage : function() {
     console.log(`${this.username}, welcome to the website`);//we use this keywoed to refer the current context in a scope.
    //  console.log(this); //this talks about current values
     
    }

}

// user.welcomeMesage()
// user.username = "sonu" //we changed the context and we got that by this
// user.welcomeMesage()

// console.log(this); //here we get empty { } but in browser we will get windiw because that is
// their global but we dont have anythiing here as global

// function chai () {
//     let username = "apurbaa"
//     console.log(this.username);//(unfefined) we cannot use this here in this wa but that was possible in object
    
// }

// Chai ()

// const chai = function() {
//     username = "apurbaa"
//     console.log(this.username);
// }
// chai()

//ARROW FUNCTION () => {}

const chai = () => {
    username = "apurbaa"
    console.log(this.username);
}

// chai() //UNDEFINED 
//Explicit return (we have to write return)
// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

//Implicit Return :-
// const addTwo = (num1 , num2) => num1 + num2
const addTwo = (num1 , num2) => (num1 + num2) //if we use () we dont have to write return nut if we'll use {} then wehave 
//to write the return keyword.

const objectInArrow = (num1 , num2) => ({username : "apurbaa"}) // to use object in arrow function we have to wrap that with a ()

console.log(addTwo(3, 4));