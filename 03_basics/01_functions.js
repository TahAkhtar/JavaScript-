/*function addTwoNumber(num1,num2){
    console.log(num1+num2)
}
addTwoNumber() 
*/

function addTwoNumber(num1,num2){
    // let result = num1+num2;
    // return result

    console.log(num1+num2)
}
const result = addTwoNumber(3,5)
// console.log("Result:",result);

function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("Tahseen"));

// Rest Operator

function calculateCartPrice(...price){
    return price

}
console.log(calculateCartPrice(200,400,600,2000));


const user = {
    username:"Tahseen",
    price:199

}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is${anyobject.price}`);
}
handleObject(user)


const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))