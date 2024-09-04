//  Array

const myArr =[0,1,4,5,7,9]
 console.log(myArr[0]);

const myHeros=["Batman","Superman","Hulk"]
console.log(myHeros[1])

const myArr2=new Array(1,2,3,4,5)
console.log(myArr[1])

// Array Methods

myArr.push(6)// Adding value in array
myArr.pop() // for removing last value of array
myArr.unshift(9) // it add values in start of array
myArr.shift() // it remove first values of array

console.log(myArr.includes(8)); // it helps us to ask array there is 8 or not

// Slice,splice

console.log("A",myArr);

const myn1 = myArr.slice(1,3)// it prints from 1 to 2 index

console.log(myn1)

console.log("B",myArr)

const myn2=myArr.splice(1,3)// it removes the portion which splice
console.log("C",myArr);
console.log(myn2)