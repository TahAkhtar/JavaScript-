// singleton

// object Literals

//Symbol
const mySym = Symbol("key1")

const JsUser = {
    name:"Tahseen",
    age: 22,
    location:"New Delhi",
    [mySym]:"mykey1",
    email:"tahseen@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mySym]);

// For changing Value in Objects
JsUser.email = "tahseen@facebook.com"

// for locking Values 
Object.freeze(JsUser)
JsUser.email = "tahseen@microsoft.com"
console.log(JsUser);

// Adding Function

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`"Hello JS user",${this.name}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())