// node 05_iterators/five.js
const coding = ["js", "ruby", "java","python", "cpp"]

// coding.forEach( function (item) {
//     console.log(item);
// } )

//arrow callback function ( callback function doesnot have any name in the function )

// coding.forEach( (item) => {
//     console.log(item);    
// })

// here we have made a function before going to the forEach loop:-

// function printMe(apu) {
//     console.log(apu);
    
// }

// coding.forEach(printMe)

//parameter has the access of index and array also

// coding.forEach((item , index , arr) => {
//     console.log(item , index , arr);
// })

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})