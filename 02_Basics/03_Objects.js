Object.create  //  Creates an object that has the specified prototype or that has null prototype
//it is done through constructor method 

//Object literal

const mySym = Symbol("key1")   // Symbol declaration 

const JsUser = {
    name :"Amit ",
    //in case of objects we can define keys and values both irrespective of Arrays 
    "fullname":"Amit Singh",
    age : 23,
    location :"Jaipur ",
    [mySym] :"myKey1",    // we use [] to indicate the symbol 

    email: "Amit@gmail.com",
    lastLoggedIn :["Monday ", " Tuesday "],
    isLoggedIn :false , 
}
console.log(JsUser.email); // if we are accessing through dot no need to take it as a string 
console.log(JsUser["email"]);
console.log(JsUser.fullname);

console.log(JsUser[mySym]);  // Take symbol as a key and print it 


//freeze 
JsUser.email = "Amit@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "Amit@microsoft.com"  //after freeze we can not modify any details  
console.log(JsUser);

//function  greetings
JsUser.greeting = function(){
    console.log("Hello Js User ");

}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User,${this.name} ` );

}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
