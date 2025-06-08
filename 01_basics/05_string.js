const name = "Apurbaa"
const repoCount =  2

// console.log( name + repoCount + " value"); // adding or concatinating

//but nowadays we use backticks
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//another way to declare string
const gameName = new String('Apurbaa-hc')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
console.log(gameName.indexOf("b"));
// methords ;-

//SUBSTRING (we cannot give negative values there)
const newString = gameName.substring(0 , 4)
console.log(newString);

//SLICING ( we can do negative values here)
const anotherString = gameName.slice(-8 , 4) //going from backwaRD
console.log(anotherString);

//TRIM (sometimes when we give any online form the user enter so many unnecessary spaces which we dont wanr to store) 
// used in white space characters
const newStringOne = "   apurbaa@gmail.com         "
console.log(newStringOne);
console.log(newStringOne.trim());

// REPLACE 
const url = "https://apurbaa.com/apurbaa%20goswami"

console.log(url.replace('%20' , '-'));

//INCLUDES (to ask if the keyword is present in the string,  used in social media to remove spam comments)
console.log(url.includes('apurbaa'));

//SPLIT 
console.log(gameName.split('-'));
