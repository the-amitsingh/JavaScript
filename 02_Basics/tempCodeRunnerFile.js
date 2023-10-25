const marvel_heros = ["Thor", "Ironman ","Spiderman"]
const dc_heros = ["superman", "flsh","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// const allheroes = marvel_heros.concat(dc_heros)
// console.log(allheroes);

const all_new_heroes = [...marvel_heros, ...dc_heros]
//console.log(all_new_heroes);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);