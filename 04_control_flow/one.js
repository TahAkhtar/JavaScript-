// if 
/*const isUserLoggedIn = true
const temperature = 41
if(temperature<50){
    console.log("less than 50")

} else{
    console.log("temperature is greater than 50");
}*/

// const score = 200;
// if(score>100){
//     const power = "fly"
//     console.log(`User power: ${power}`)
// }

// SHORT HAND
const balance =1000
// if(balance > 500) console.log("test");


// NESTING

// if (balance<500){
//     console.log("less than 500")
// } else if (balance<900){
//     console.log("less than 750")
// }else{
//     console.log("less than 1200")
// }

const userLoggedIn = true;
const debitCard = true

const loggedFromGoogle= false
const loggedFromEmail=true
//AND
if(userLoggedIn && debitCard){
    console.log("Allow to buy course")
}
//OR
if(loggedFromGoogle || loggedFromEmail){
    console.log("User logged in")
}

// Nullish coalescing Operator (??): null undefined
// it checks the safety of Null values 
let val1;
// val1 = 5 ?? 10

val1=null??10 
console.log(val1)//here val1 will become 10 

val1 = undefined ?? 15
console.log(val1) // same here it will give 15

val1 = null?? 10?? 20
// Here it give values which comes first

//Ternary Operator

// condition? true:false

const iceTeaPrice = 100
iceTeaPrice>=80? console.log("less than 80"):console.log("more than 80")