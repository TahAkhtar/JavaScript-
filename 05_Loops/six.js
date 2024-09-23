// const coding =["js","ruby","java","python","cpp"]


// const values = coding.forEach((item) => {
//     console.log(item)
//     return
// })
// console.log(values)
// It will not print anything because Each loop doest not return anything

// Filters :- it will only true values
const myNums = [1,2,3,4,5,6,7,8,9,10]
myNums.filter((num) => num>4)

// const newNums = myNums.filter((num)=> num>4)

// console.log(newNums)

// const newNums = myNums.filter((num) => {
//     return num > 4 // whenever we use curly braces we have to write return to get Output...reference Above
// })

const newNums = []

myNums.forEach((num) => {
    if (num>4){
        newNums.push(num)
    }
})
console.log(newNums);