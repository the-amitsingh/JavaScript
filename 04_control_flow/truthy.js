const userEmail = []

if(userEmail){
    console.log("Got user email ");
}else {
    console.log("Don't have user email");
}

// falsy values are : false , 0 , -0 , BigInt 0n, "" , null , undefined , NaN
 
//Truthy values : "0" , 'false' , " " , [] ,{} , function(){}

if(userEmail.length ===0 ){
    console.log("Empty Array ");
}

const emptyObj = {}

if (Object.keys(emptyObj).length ===0){
    console.log("Object is empty ");
}