// node 05_iterators/four.js

//FOR IN LOOP
//for in loop is for OBJECTS
myObject ={
    ily:"i love you",
    phd:"pretty huge D",
    SC: "Sritam Chakrabartty",
    AG: "Forevr Apurbaa Goswami"
}

// for (const key in myObject) {
//    console.log(`${key} shortcut is for ${myObject[key]}`);
// }

const programming =["js", "cpp", "py","java","rb"]

for (const key in programming) {
    console.log(`these are the keys :${key} and these are the values : ${programming[key]}`);
}
//to get key write (key)
//to get the values (programming[key])