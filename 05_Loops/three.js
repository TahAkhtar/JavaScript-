// for of 

// ["","",]

// [{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) { // Here num is iterator
   console.log(num) 
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

// Maps:- The Map Object holds key-value pairs and remembers the original insertion order.
// it is not iteratable
const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

console.log(map)

for(const[key,value] of map){
    console.log(key,':-',value)
}

const myObject = {
    'game1':'NFS',
    'game2':'Spiderman'
}
// for(const[key,value] of myObject){
//     console.log(key,':-',value)
// }

// It will give error because Object is not iteratable here because of For Loop
// to iterate we have to use for in loop