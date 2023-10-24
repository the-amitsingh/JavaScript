//                     // Primitive
// 7 Types : String , Number , Boolean , null, undefined , Symbol , BigInt

const score = 100 
const scoreValue = 100.4

const isLoggedIn = false 
const outsideTemp = null
let userEmail ;
const id = Symbol('123')
const anotherId = Symbol('123')
 
console.log(id === anotherId);

const bigNumber = 544544654654654n    //BigInt

//                     ///Reference Type (Non Primitive )
// // Array , Objects , Function , 

const heros =[ "Shaktiman " , "naagraj" , "doga"]  //Array
let myObj={
    name:"AMit",
    age:21,
    place:"Asia"
}
console.log(myObj );

const myFunction = function(){
    console.log("Hello World ");
}
console.log(typeof myFunction);


// ********************************Memory **************************
// Stack (used in primitive dataType ) , gives a copy of the declared variable   
// Heap ( used in Non-primitive dataType) , gives the reference of the original value  and on changing it changes the original value 


// stack memory example 
let myYoutubename = "Amit Singhdotcom"

let anothername =  myYoutubename
anothername = " Ankit "

console.log(myYoutubename);
console.log(anothername);


// Heap memory example 
let userOne = {
    email : "user@google.com",
    upi : "user@pbl"
}
let userTwo = userOne
userTwo.email = "Amit@google.com"

console.log(userOne.email);
console.log(userTwo.email);
