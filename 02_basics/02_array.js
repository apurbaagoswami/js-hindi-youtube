//node 02_basics/02_array.js (for output)
const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros) // array can take another array aslo as an element
// console.log(marvel_heros[3][0]);//gives superman (not right way)

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros); //it returns a new array

//using spread instead of concat 
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);


//FLAT : retuens a new array with all sub array elements concatinates into it.

const another_array = [1, 2, 3, [4, 5, 6] , 7 , [6, 7,[1,9]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

// ask or convert to an array

console.log(Array.isArray("Apurbaa"));
console.log(Array.from("Apurbaa")); //converts to an array
console.log(Array.from({name : "Apurbaa"}));// Interview = actually it gives an empty array[]

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//returns a new array from set of elements