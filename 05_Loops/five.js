// for Each Loop

// Higher Order Function

const coding =["js","ruby","java","python","cpp"]

// For Each giving call back Function
// call back Function does not contain name
// Here item is just a variable
coding.forEach( function  (item) {
    console.log(item)
})

coding.forEach((item)=> {
    console.log(item)
})

// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)

coding.forEach((item,index,arr) => {
    console.log(item,index,arr)
})

const myCoidng=[
    {
        languageName: "java",
        languageFileName:"java"
    },
    {
        languageName: "python",
        languageFileName:"py"
    },
    {
        languageName: "javascript",
        languageFileName:"js"
    },

]

forEach(() => {
    console.log(item.languageName)
})