//Reduce in js 

const myNums = [1,2,3]
// const myTotal = myNums .reduce(function(accumulator , currentval){
    
//     console.log(`accumulatoro : ${accumulator} and currentval : ${currentval}`);
//     return accumulator + currentval
// }, 0 )

const myTotal = myNums.reduce((acc , curr) => acc+curr, 0)

console.log(myTotal); 

const shoppingCart = [
    {
        itemName : "PyCourse ",
        price :5999
    },
    {
        itemName : "Data Science  ",
        price :5854
    },
    {
        itemName : "Mobile Development  ",
        price :7999
    },
]
const priceToPay = shoppingCart.reduce ((acc, item ) =>acc+  item.price ,0)
console.log(priceToPay);