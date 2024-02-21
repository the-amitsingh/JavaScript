const promiseOne = new promise(function(resolve , reject){
    //Do an async tasks 
    //DB calls , cryptography , network related 
    setTimeout(function (){

        console.log("Async Task completed ")
        resolve()
},1000)
})
promiseOne.then(function(){
console.log("promise consumed ")
})