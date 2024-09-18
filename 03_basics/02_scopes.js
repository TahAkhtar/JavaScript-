let a=300;
const b = 20;
// var c = 30; 

if (true){
    let a = 10
    const b = 20
    console.log("INNER: ",a) //Local scope
}

console.log(a); // Global Scope
// console.log(b);
// console.log(c)

function one (){
    const username = "Tahseen"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)
    two()

}
// one()

if(true){
    const username = "Tahseen"
    if(username==="Tahseen"){
        const website = " youtube"
        console.log(username+website)
    }
    // console.log(website) )(Out of scope thats why throwing error)
}
// console.log(username) same as above


// +++++++++++++Intresting++++++++++++

function addOne(num){
    return num+1

}
addOne(5)

// Also called Expression
// hoisting => execution context we cannot use value before declaration 👇 

const addTwo = function(num){
    return num + 2
}
addTwo(5)