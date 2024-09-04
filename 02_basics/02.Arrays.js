const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["Superman","Flash","Batman"]

marvel_heros.push(dc_heros) // here DC_heros will become single as output

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const all_heros= marvel_heros.concat(dc_heros) // it will merge both variable of array
console.log(all_heros)

// Spread Operator:-It spread every single values

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros)

console.log(Array.isArray("Tahseen"))
console.log(Array.from("Tahseen"))


let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3));