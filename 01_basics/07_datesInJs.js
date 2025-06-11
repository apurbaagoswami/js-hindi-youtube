//Dates

let myDate = new Date()
// console.log(myDate.toString()); //Wed Jun 11 2025 14:40:38 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); //Wed Jun 11 2025
// console.log(myDate.toLocaleString()); //6/11/2025, 2:40:38 PM
// console.log(typeof myDate); //date is an object

let myCreatedDate = new Date("2023-01-14") // months starts from -0=> january
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());//Mon Jan 23 2023
// console.log(myCreatedDate.toLocaleString()) //1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// 1749653624292
// 1673654400000 these are the two millisecond output of the above these are used in making projects.
console.log(Date.now()); //this will come in milliseconds but we will convert it to seconds ASKED IN INTERVIEWS
console.log(Math.floor(Date.now()/1000)) // this will comes in seconds

let newDate = new Date() 
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);
// `${newDate.getDay()} and the month is {newDate.getMonth() + 1}`

//customization of LOCALE STRING
newDate.toLocaleString('default' , {
    weekday:"long",
})