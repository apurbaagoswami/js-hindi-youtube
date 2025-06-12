// array

const myArr = [0 , 1 , 2 , 3 , 4, 5] //multiple elements in single variable
// //arrays in js makes shallow copies 
//shallow shAres the same reference INTERVIEW QUESTION
const myHeros = ["Shaktiman", "nagraj"]

const myArr2 = new Array (1, 2, 3, 4)
// console.log(myArr[1]);

//Array Methords

// myArr.push(6) 
// myArr.push("Apurbaa")//adds elements to an array
// myArr.pop()//removes the last value of the array

// myArr.unshift(95) //adds element in first place
// myArr.shift() //removes the first element 

// console.log(myArr.includes(9)); //answers question in boolean data type. (false)
// console.log(myArr.indexOf(9)); //answers question

const newArr = myArr.join() //converts array to string comma separated
// console.log(newArr);
// console.log(myArr);

// Slice , Splice

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3) //gives  a section of array (exclude index 1 and 3 in array)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3) // original array gets manipulated (this includes the 3 but excludes 1)
console.log(myn2);
console.log("C ", myArr);