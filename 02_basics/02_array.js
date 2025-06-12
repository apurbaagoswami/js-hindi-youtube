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
console.log(all_new_heros);

