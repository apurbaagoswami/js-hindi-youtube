// node 05_iterators/one.js
//for loop

// for (let i = 0; i < 10; i++ ) {
//     const element = i;
//     if (element == 1) {
//         console.log("I love you Sonu")
//     }
//     console.log(element);
// }

// for (let i = 10; i <= 15; i++) {  // i = i + 1

//     console.log(`Outer loop value ${i}`);
    
//     for (let j = 0; j <= 10 ; j++) {

//         console.log(i + " * " + j + " = " + i*j);
//     }
// }

// let myArray = ["flash" , "batman" , "superman"]

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     // console.log(element);
//}


//break and continue


for (let index = 1 ; index <=20 ; index++) {
    if (index == 5) {
        console.log(`detected 5`);
        break
    }
   console.log(`value of i is ${index}`);    
}
for (let index = 1 ; index <=20 ; index++) {
    if (index == 5) {
        console.log(`detected 5`);
        break
    }
   console.log(`value of i is ${index}`);    
}
for (let index = 1 ; index <=20 ; index++) {
    if (index == 5) {
        console.log(`detected 5`);
        break
    }
   console.log(`value of i is ${index}`);    
}

for (let index = 1 ; index <=20 ; index++) {
    if (index == 5) {
        console.log(`detected 5`);
        continue
    }
   console.log(`value of i is ${index}`);    
}

