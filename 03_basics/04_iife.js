// node  03_basics/04_iife.js
//IIFE = Immediately Invoked Function Expressions 
// used because to execute a function immediately and most importantly to not get polluted 
// from the global scope variables or declarations.
 
//this is a named IIFE
(function chai(){
    console.log(`db connected`);
})();

// WE need to applt the semicolon ;

//This is unnamed IIFE
( (name) => {
    console.log(`So the name is ${name}`);
})("apurbaa");