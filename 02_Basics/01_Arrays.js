const myArray = [0,1,2,3,4,]
const myArray2 = new Array(1,2,3,4)
//console.log(myArray[1]);

// Array Methods 

myArray.push(5)
myArray.push(7)
myArray.pop()
//console.log(myArray);
 

myArray.unshift(9) // allocates the value at the begining of arr 
//console.log(myArray);

myArray.shift()
//console.log(myArray);


// console.log(myArray.includes(9));
// console.log(myArray.indexOf(3));

const newArr =  myArray.join() //Adds all the elements of an array into a string, separated by the specified separator string.

//console.log(myArray);
// console.log(newArr);
// console.log(typeof(newArr));

//slice 
console.log(" A ", myArray);
const myn1 = myArray.slice(1,3) //Returns a copy of a section of an array.
console.log(myn1);
console.log("B ", myArray);

//splice 
 const myn2 = myArray.splice(1,3) //Removes elements from an original  array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log(myn2);
console.log("C ", myArray);