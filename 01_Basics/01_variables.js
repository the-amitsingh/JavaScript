 const accountId = 132234    //const are final and cant be changed 
 let accountEmail = "amit@gmail.com"   //The keyword let in Javascript is used to declare a variable that is block scoped in JavaScript . 

var accountPassword = "12345"   //the var keyword is typically used to declare a variable that is treated like any other variable, whereas variables declared using the let in JavaScript are block scoped.

accountCity = "Jaipur"
let accountState ;  // in javascript if we leave the variable declared without assigning any value then it will give undefined 


// accountId = 2     Not allowed because account id is  declared const 

accountEmail = "jfkfff@gmail.com"
accountCity = "Raipur"
accountPassword = "545465"

console.log(accountId); 
/*
prefer not to use var 
because of issue in block scope and functional scope    


*/ 

console.table([accountId , accountEmail , accountPassword , accountCity , accountState])
