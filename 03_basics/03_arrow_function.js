// This:-refer current context

const user = {
    username:"Tahseen",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
    }
}
// user.welcomeMessage()
// user.username="Sam"
// user.welcomeMessage()

/*function chai(){
    console.log(this)
}
chai() */
// This will work only in Object

// const chai = function (){
    // let username="Tahseen"
    // console.log(this.username)
// }
// chai()

// Arrow Function:-Global Object
const chai = () =>{
    let username = "Tahseen"
    console.log(this);
}
//chai()
//Basic Arrow function
// const addTwo = (num1,num2)=>{
    // return num1+num2
// }

// Implicit return:-we don't have to use curly bracket{}

// const addTwo = (num1,num2)=> (num1+num2)
    
const addTwo = (num1,num2)=> ({username:"Tahseen"}) // we have to wrap object in parenthesis for return otherwise it will us undefined values


console.log(addTwo(3,4))

