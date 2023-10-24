const name = "Amit";
const repoCount = 20

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ('amit-Ac-com')

console.log(gameName[0]);
console.log(gameName.__proto__ );
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
const newString = gameName.substring(0 ,4 )
console.log(newString);

const anotherString = gameName.slice(-8 , 2);
console.log(anotherString);

const newStringOne = "   Amit   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Amit.com/amit%30Singh"
console.log(url.replace('%30', '-'));
console.log(url.includes('sundar'));


console.log(gameName.split('-'));