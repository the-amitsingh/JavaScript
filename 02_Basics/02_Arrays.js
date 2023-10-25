const marvel_heros = ["Thor", "Ironman ","Spiderman"]
const dc_heros = ["superman", "flsh","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// const allheroes = marvel_heros.concat(dc_heros)
// console.log(allheroes);

const all_new_heroes = [...marvel_heros, ...dc_heros]
//console.log(all_new_heroes);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity) //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_array);

console.log(Array.isArray("Amit"));
console.log(Array.from("Amit")); //Creates an array from an iterable object.
console.log(Array.from({name:"Amit"})); //gives empty array 


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)); //Returns a new array from a set of elements.