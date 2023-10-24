// const score = 400 
// console.log(score );

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const otherNumber = 2784.785
// console.log(otherNumber.toPrecision(3));

// const hundreds = 1000000;
// console.log(hundreds.toLocaleString());


// // **********************************MATHS****************************************



console.log(Math);
console.log(Math.abs(-32));
console.log(Math.round(34.7));
console.log(Math.ceil(34.2));  // ceil value return 35 if the no. is either greater a little bit of 34

console.log(Math.max(4,8,7,8,9));
console.log(Math.min(4,8,7,8,9));


console.log(Math.random()); // it always gives the value in between 0 and 1 
console.log((Math.random()*10) +1 ); //it will always give value greater than 1 and in between 1 to 9 
console.log(Math.floor(Math.random()*10) +1 ); // floor will round of to the lowest value


const max = 20 
const min = 10 
console.log(Math.floor(Math.random() * (max - min + 1 )) + min);

