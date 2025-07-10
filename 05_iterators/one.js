// node 05_iterations/one.js
//for loop

for (let i = 0; i < 10; i++ ) {
    const element = i;
    if (element == 1) {
        console.log("I love you Sonu")
    }
    console.log(element);
}

for (let i = 0; i < array.length; i++) {

    console.log(`Outer loop value ${i}`);
    
    for (let j = 0; j < array.length; j++) {

        console.log(`inner loop value ${j}`);
    }
}