const score = 400
// console.log(score);
//new is a key word
const balance = new Number (100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); //to get precise data in e-commerce websites.

const otherNumber = 23.48 
// console.log(otherNumber.toPrecision(2)); //makes the number precise yo near the greatest point or whole number.(rounds off)

const hundereds = 1000000
// console.log(hundereds.toLocaleString()); // adds commas in US standard
// console.log(hundereds.toLocaleString('en-IN')); // add commas in Indian standards

//+++++++++++++++++++++++++++++++++++++++++++  MATHS  ++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); //absolute value - changes negative value to positive
// console.log(Math.round(4.3));// helps in rounding off the value
// console.log(Math.ceil(4.2)); // rounds off to top value => 4.2 = 5
// console.log(Math.floor(4.3));// round off to smaller value => 4.3 = 5
// console.log(Math.min(4 , 3, 5 , 6)); //finds the minimum number
// console.log(Math.max(4 , 3, 5 , 6));//finds out the bigger number

console.log(Math.random()); //computer gives some random number in 0 to 1. IMPORTANT
console.log(Math.floor(Math.random()*10) + 1); // now it will give number inbetween 1 to 100. 
// To aviod conditions like 0.1 floor = 0 we added 1 there.

const min = 10
const max = 20
// when we need the values between the max and min we added the min in the last .
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
