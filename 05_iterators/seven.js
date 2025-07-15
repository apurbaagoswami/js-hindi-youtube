// node 05_iterators/seven.js
const mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = mynumbers.map((num) => num + 10) // If we want to open a scope then we have to write return {return num + 10}.
// console.log(newNums);

// const newNums = []
// mynumbers.forEach ((num) =>{
//     newNums.push(num * 10 )
// })

const newNums = mynumbers
             .map((num) => num * 10)
             .map((num) => num + 1)
             .filter((num) => num >= 30)

console.log(newNums);