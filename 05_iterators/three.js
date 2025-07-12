// node 05_iterators/three.js

//FOR OF LOOP
//We used this loop for the arrays

// ["","",""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

//Maps: key values should be unique

const map = new Map()
map.set('IN',"India")
map.set('USA',"United states of America")
map.set('FR',"France")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ":- , value");
}

const myObject ={
    'game1':'NFS',
    'game2' : 'Spiderman'
}

// for (const [key , value] of myObject) {
//     console.log(key, ":- , value");
// } 
//maps are iteratable in for of loop but objects are not iteratable here.