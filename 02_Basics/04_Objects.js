//Singelton 
const tindrUser = new Object()  // This is a singelton object 

const tinderUser = {} //This is a non sinigelton object 

tinderUser.id = "123abc"
tinderUser.name = "Sammey "
tinderUser.isLoggedIn = false 
console.log(tinderUser);

const regularUser = {
    email: "some @gmail.com",
    fullname :{
        userfullname:{
            firstName : "Amit",
            lastName:"Singh"
        }
    }
}
console.log(regularUser.fullname.userfullname);

// combination of objects 
const Obj1  = {1:"a",2:"b"}
const Obj2 = {3 :"a",4:"b"}
const Obj4 = {5 :"a",6:"b"}

//const obj3 = Object.assign({},Obj1,Obj2,Obj4)
 //Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
// {} --> This represents the target where as well as obj1, obj2, obj4 are source
                //or 
const obj3 = {...Obj1, ...Obj2}
console.log(obj3);


console.log(tinderUser);
console.log(Object.keys(tinderUser)); //Returns the names of the enumerable string properties and methods of an object.
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));