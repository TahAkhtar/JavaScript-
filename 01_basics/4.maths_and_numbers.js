const score = 400;


const balance = new Number(100)
console.log(balance)

console.log(balance.toString());
console.log(balance.toFixed(2))
// tofixed used for displaying precison value  67.54

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3));

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'));

// ------------Maths-------------
console.log(Math.abs(-4)); // it change negative value into Positive
console.log(Math.round(4.6)); // it will round off
console.log(Math.floor(4.3));
console.log(Math.ceil(4.1));


console.log(Math.random()); // it will give us the value between 0 and 1

console.log(Math.floor(Math.random()*10) + 1);

const min =10;
const max = 20;

// Math.random()*(max-min+1)+min;
console.log(Math.floor(Math.random()*(max-min+1))+min);

console.log()

