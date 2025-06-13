//node 02_basics/03_objects.js
// SINGLETON : IT becomes in constructor foem not in literal form (INTERVIEW)
//object.create
//Object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Apurbaa",
    "fullname" : "Apurbaa Goswami",
    Age : 19 ,
    [mySym] : "mykey1" , // to use a symbol in am object we have to cover it with the square bracket this is the syntax
    location : "Jajpur",
    email : "apurbaa@google.com",
    isLoggedIn : false,
    LastLoginDays : ["Monday" , "Saturday"]
}
//two types we can access to our object
console.log(JsUser.email) // we cannot acces that string key here 
console.log(JsUser["email"])
console.log(JsUser["fullname"]) // by this only we can access that
console.log(JsUser[mySym])

JsUser.email = "apurbaa@microsoft.com" //to change the  values of the key
Object.freeze(jsUser) //locks the object 

JsUser.greeting = function(){
    console.log("Hello JS user");
}

console.log(JsUser.greeting);