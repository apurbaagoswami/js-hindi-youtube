// node 03_basics/02_scopes.js
let a = 10 //these are global scope
const b = 20
// var c = 3

//this is scope {} 
if (true) { //block scope
    let a = 10
    const b = 20
      
}


// console.log(a);
// console.log(b);
// console.log(c);

//NESTED SCOPE
//the  child function can access to the parent function but the parent cannot do so => this is called closure.
function one(){
    const username = "apurbaa"

    function two (){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
  two()  
    
}

// one()

if (true) {
    const username = "apurbaa"
    if(username === "apurbaa") {
        const website = "Youtube"
        // console.log(username + website);
    }
    // console.log(website); this is a error
}
// console.log(username); this is also an error because the variable was declared inside the scope.

//++++++++++++++++++++++ INTERESTING +++++++++++++++++++++++++++

addOne(5) //this is called before the function and this will run without error

function addOne(num){
    return num + 1
}

// addTwo(5) // this will not get any access to be called because the fuunction is under a variable
const addTwo = function (num) { //sometimes we call it an expression (THIS IS HOSTING)
    return num + 2
}

addTwo(5)