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

function calculateCartPrice(...num1){
    return num1
    // ... are called as rest operator as well as spread operator 
}
console.log(calculateCartPrice(222 , 4554 ,845 ))

const user = {
    username : "Amit",
    price :244
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);

}
//handleObject(user )
// We can pass direct object also 

handleObject({
    username :"Sam ",
    price : "399"
})

// we can pass array  also 
const myNewArray = [200,300,400,5000]

function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));  OR
console.log(returnSecondValue([200,300,400,5000]));
