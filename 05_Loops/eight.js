// Reduce

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(accumulator,currentval){
//     console.log(`accumulator:${accumulator} and Current value: ${currentval} `)
//     return accumulator+currentval
// },0) // here 0 is initial value which will go in accumulator 

const myTotal = myNums.reduce((accumulator,currentval) => accumulator+currentval,0)
// Same as above
console.log(myTotal)


const shoppingCart = [
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"py course",
        price:999
    },
    {
        itemName:"mobile dev course",
        price:5999
    },
    {
        itemName:"data science course",
        price:12999
    },

]
const toPay = shoppingCart.reduce((acc,item)=> acc+item.price,0)
console.log(toPay)