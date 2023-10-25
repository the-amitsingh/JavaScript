// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2){
    let result = number1 + number2;
    return result 
}
const result = addTwoNumbers(2,23)
console.log("Result ", result);

function loginUserMessage(username ){
    if(!username){
        console.log("Please enter  a username ");
        return 
    }
    return `${username} jut logged in `
}
//console.log(loginUserMessage("hitesh"));
// if we dont pass any value then it will be undefined 
console.log(loginUserMessage());