// JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).


let myDate = new Date ()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


let myCreatedDate = new Date (2024,0,24)  // in js if we give input of month in single digit it starts from 0 
let myCreatedDate1 = new Date (2024,0,24,5,3)
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date ("2023-02-25") //in  js if we give input of month in double digit it starts from 01  
console.log(myCreatedDate2.toDateString());

// TimeStamp in js 
let myTimeStamp = Date.now()
// console.log(myTimeStamp);   // it returns the miliseconds value 
// console.log(myCreatedDate.getTime());  through this we can compare the created Date and TImeStamp   
console.log(Math.floor(Date.now()/1000)); // converts it in seconds 


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(newDate.getTime ());

newDate.toLocaleString('default',{
    weekday: "long"
})