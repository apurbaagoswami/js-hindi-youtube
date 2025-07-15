// node 05_iterators/nine.js

const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function(acc , curval) {
//     console.log(`acc ${acc} curval ${curval}`);
//     return acc + curval
// } , 0)

const myTotal = myNums.reduce((acc, curval) => acc + curval, 0); //using arrow function syntax

// console.log(myTotal); // Output: 6

const shoppingCart = [
    {
        itemName : "js course",
        price : 2999,  
    },
    {
        itemName : "mobileDev course",
        price : 5999,  
    },
    {
        itemName : "data science course",
        price : 12999,  
    }
]

const priceToPay = shoppingCart.reduce ((acc , item) => acc + item.price , 0)
console.log(priceToPay); // Output: 21997
