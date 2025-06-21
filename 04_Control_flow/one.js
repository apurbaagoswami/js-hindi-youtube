// node 04_Control_flow/one.js
//IF Statement

// const isUserLoggedIn = true
// const temperature = 41

// if ( temperature < 50) {
//     console.log("Temp is less than 50");
// }
// // === and !== checks the datatype too strictly.

//  if ( 2 === "2") {
//     console.log("Executed");
// } else {
//     console.log("Not executed")
// }

// const score = 200

// if (score > 100){
//     const power = "fly"
//     console.log(`User power &{power}`);
// }

// const balance = 1000

// // if (balance > 500) console.log("Test"); //implicit scope(short hand)

// if ( balance < 500) {
//     console.log("less than");

// } else if ( balance < 750 ) {
//     console.log("less than 750");

// }else if (balance < 900) {
//     console.log("less than 900");
// }
//  else {
//     console.log("Balance is less than 1200")
// }

const userLoggedIn = true
const debitCard = true

if ( userLoggedIn && debitCard) {
    console.log("Allow to buy course")
}