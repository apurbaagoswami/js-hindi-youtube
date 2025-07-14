// node 05_iterators/six.js
//FILTERS

// const coding = ["js", "ruby", "java","python", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item // doesnot return anything
// })

// console.log(values); // undefined, forEach does not return anything

const myNums = [1, 2, 3, 4, 5 , 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) =>{
//     return num > 5;
// })

// const newNums = []

// myNums.forEach ((num) => {
//     if(num > 4) {
//         newNums.push(num);
//     }
// })

// console.log(newNums); 


const books = [
        {title: "Book One", genre: "horror", year: 2001},
        {title: "Book Two", genre: "fiction", year: 2005},
        {title: "Book Three", genre: "romance", year: 2010},
        {title: "Book Four", genre: "horror", year: 2015},
        {title: "Book Five", genre: "comedy", year: 2020}
]

let userBooks = books.filter ((bk) => bk.genre ==="horror")

userBooks = books.filter((bk)=>{return bk.year < 2010 && bk.genre ==="horror"} )

console.log(userBooks);