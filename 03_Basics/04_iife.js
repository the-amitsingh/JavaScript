// Immediately invoked function Expressions (IIFE)
//functions that are executed when they are initialized. An IIFE (pronounced “iffy”) can be initialized or defined to achieve a certain purpose
(function chai (){
    //named iife
    console.log(`DB conected `);
})();

// syntax 
//(//function)(execution) 

// Due to pollution of global scope we had to face problems some time so to remove the variables or pollution of global scope we use iife

// To end the invoked function in js we use ; 


// iife with arrow function
( (name)=>{
    //unnamed iife  
    console.log(`DB connected Two  ${name}`);
})('Amit')