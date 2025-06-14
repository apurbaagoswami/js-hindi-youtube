// node 02_basics/04_objects.js

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name ="Sammy"
tinderUser.isLoggedIn = false

//to get the keys and values in an array form :- (IMPORTANT)
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser)); // gives all in an array
console.log(Object.entries(tinderUser)); // we will get the both key and value in an array under an array comma separated [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser);

const regularUser = {
    email : "some@g.com",
    fullname : {
        userfullname : {
            firstname : "apurbaa",
            lastname : "goswami" //nesting is possible in objects(obj k andar obj )
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname); // we can open the next by using "." after the name of the object

// HOW TO CONCAT TWO OBJECTS ??
const obj1 = {1:"a", 2 : "b"}
const obj2 = {3 :"c", 4 :"d"}
// const obj3 = { obj1 , obj2} //this will make the two object in iside anothr object not actually concat that

//we use assign to add the objects 
// const obj3 = Object.assign({}, obj1 , obj2) // here the obj1 and 2 is getting stored in a empty object that is {} target

const obj3 = {...obj1, ...obj2} // this will be used all time spread operation. #latest
console.log(obj3);


// when data comes from database :-
const users = [
    {
        email : "Apurbaa@tg",
        id : 41568
    },
    {
        email : "sritam@tg",
        id : 41568
    },
    {
        email : "barnali@tg",
        id : 41568
    }
]
// to asses these we need to do :
// console.log(users[1].email)

//WE CAN ASLO ASK F THE OBJECT HAVE A key BY SEARCHING
console.log(tinderUser.hasOwnProperty("isLoggedIn")); // gives answer in boolean


//OBJECT DESTRUCTURE (getting the value from key)
const course = {
    courseName : "javascript",
    price :  999,
    courseInstructor : "Hitesh Choudhry"
}
// we can access it by the normal methord 
// console.log (course.courseInstructo)r //but when we have to do it  multiple timee  the code will not be clean 
const {courseInstructor : instructor} = course 
console.log(instructor);

//this is a JSON ( a object without and name or variable)
// {
//     "name" : "Apu",
//      "age" : 19
//}

// Sometimes we will found APIs in the form of arrays also
// [
//     {},
//     {},
//     {}
// ]

