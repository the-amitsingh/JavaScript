const user = {
    username : "Amit",
    price :545,
    welcomeMessage : function(){
        console.log(`${this.username} , Welcome to Website `); //this makes current context
        //console.log(this);
    }

}
// user.welcomeMessage()
// user.username = "sam"
//  user.welcomeMessage()

//  console.log(this);

// const chai = function() {
//     let username = "Hitesh"
//     //console.log(this.username); // we can use this in object but not directly in function     
// }


//ARROW Function 
const chai1 = () => {
    let username = "Hitesh"
    console.log(this);
}
//chai()
chai1()

// Syntax  
// () =>{}
// Example : const addTwo = () =>{}

//Explicitly return 

// const addTwo = (num1 , num2 ) =>{
//     return num1 +num2
// }

//implicit return -> in implicit return no. of ines of code should be 1 and there should be no return , if we write in curly  {} we should have to write return 
// const addTwo = (num1 , num2 ) => num1 +num2

const addTwo = (num1 , num2 ) =>({username :"Amit "})

console.log(addTwo(5,6));
