// //if statement 

// const isUserloggedIn = true
// const temperature = 41 

// if(temperature <50){
//     console.log("less than 50 ");
// }else{ 
//     console.log("Greater than 50 ");
// }
// // < , > , <= , >= , == , != , === , !== , 

// const score = 200
// if (score > 100){
//     const power = "fly "
//     console.log(`user power : ${power}`);
// }


const balance = 1000

//implicit scope 
// if (balance >500) console.log("Test"), console.log("Test");  wrong way to write code 
if (balance <500){
    console.log("Less than 500");
}else if (balance <750){
    console.log("Less than 750");
}else if (balance <900){
    console.log("Lesss than 900");
}else {
    console.log("Less than 1200");
}

const userLoggedIn = true 
const debitCard = true 
const loggedInFromGoogle = true 
const loggedInFromEmail = true 

if (userLoggedIn && debitCard){
    console.log("Allow them to buy courses ");
}
if (userLoggedIn || loggedInFromEmail){
    console.log("user Logged In  ");
}