// we always use let or const in scope because the scope of var is completely global where as let and const can be used as either local or global 
//  var c =300
//  let a =100

//  if (true ){
//     let a = 10
//     const b = 20 
//     console.log("Inner :", a);

//  }
//  console.log(a);
// //  console.log(b);
// //  console.log(c);

// //Nested Scope

// function one (){
//     const username = "Amit"

//     function Two(){
//         const website = "Youtube"
//         console.log(username);
//     }
//    // console.log(website);
//     Two()
// }
// // one()

if (true){
    const username = "Amit "
    if(username =="Amit"){
        const website = "Youtube "
        console.log(username + website);
    }
   // console.log(website);
}
//console.log(username);


// ++++++++++++++++++++++++++++++++++++Interesting +++++++++++++++++++++++++++++++
console.log( addone(5));
function addone (num){
    return num+1
}


addTwo(6)
const addTwo = funtion(num){
    return  num + 2
}
 