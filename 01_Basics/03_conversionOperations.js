let score ="29"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);


// "33" => 33
// " 33abc" => NaN( Not a number)
// true => 1; false =>0

let isLoggedIn = "Amit"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//1 => true ; 0 => false
// " " => false 
// "Amit" => true 

let someNumber = 23
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);



// ************************************Operations **********************************
let value =23
let negvalue = -value
console.log(negvalue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/3);
console.log(2%3);


let str1 = "Amit "
let str2 = " Singh "
console.log(str1 + str2);

console.log( "1" + 2) ;
console.log( 1+ "2") ;
console.log( "1" + 2 + 2) ;
console.log( 1 + 2 + "2") ;

console.log(+true);
console.log(+"");

// let num1, num2 , num3 
// num1 = num2 = num3 =2+2

let gameCounter =100
gameCounter++;
console.log(gameCounter);
