// node 03_basics/01_functions.js
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName() //execution (we dont use console.log here to print the output)
// sayMyName //reference

// function addTwoNumbers(number1 , number2){ //these are known as PARAMETERS 
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1 , number2){ //these are known as PARAMETERS 
    
    // let result = number1 + number2
    // return result //so that we will get the result in the variable.
    // agter return the function will not do any work

    //more compact writing way :-
    return number1 + number2
}

 const result = addTwoNumbers(3 , 4) //calling the function (these are called ARGUMENTS when we pass the data to the paramerets)
//  console.log("Result :" ,  result) //as we have returned the result so the value will show.


function loginUserMessage(username) {
    if (!username) {
        console.log("Please enter a username.")
        return //now if the condition satisfies the code will end here.
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Apurbaa"))
// console.log(loginUserMessage("Sritam")) //undefined


function calculateCartPrice(val1, val2, ...num1){ //rest operator (gives the arguments in an array)
    return num1                                   // here the val1 and val 2 have taken the 200 and 500 so now only 500,2000 will be printed

}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username : "apurbaa",
    price : 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)
handleObject({
    username : "sam",
    price : 999
}) // we can pass the object directly to the function likr this

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(fetchArray){
    return fetchArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));// we can do it like this also(mentioning the array in the console.log)
