// dates
let myDate = new Date()
//console.log(myDate);

//console.log(myDate.toString());

// console.log(myDate.toDateString());

// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString)

//Type of date is object after display

// let myCreatedDate = new Date(2024,8,4)
//let myCreatedDate = new Date(2024,8,4,5,3)
// let myCreatedDate = new Date("2024-09-04")
let myCreatedDate = new Date("04-09-2024")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime);
// console.log(Math.round(Date.now()/1000)) // for getting values in second

let newDate = new Date();
console.log(newDate);
// for month
console.log(newDate.getMonth());
// for Day
console.log(newDate.getDay())

newDate.toLocaleString('default',{
    weekday:"long"
})