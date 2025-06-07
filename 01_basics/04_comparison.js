// console.log("2" > 1);
// console.log("02" > 1); 
// //js converted the string to number automatically where typesceipt doesnot allows to do so

console.log(null > 0);
console.log(null == 0); //equality check
console.log(null >= 0); // not predictable results.

console.log(undefined == 0); // false

// === is called strict check where the datatype is also checked.
console.log("2" === 2); //datatype is not same.

// we should avoid this kinds=a conversion we should do clean code.
