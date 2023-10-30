//for of loop

//["", "",""]
//[{},{},{}]

const arr  = [1,2,3,4,5]
for (const num of arr) {
    //console.log(num);
}

const greeetings = "Hello World "

for (const greet of greeetings) {
    // if (greet ==" "){  break if there is a space 
    //     break
    // }
 //   console.log(`Each char is ${greet}`);
}

//Maps 
//The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

//It always return the unique values and return in given order 
const map = new Map()
map.set('IN', "INDIA")
map.set('Fr', "France")
map.set('Ra', "Russia")
map.set('IN', "INDIA")
console.log(map);

for (const [key, value]  of map) {
    console.log(key ,':-', value);
    
}

// for of loop in object 
const myObject = {
    'game1' :'NFS',
    'game2':'spiderman'
}
for ( const[key,value] of myObject) {
    console.log(key ,':-', value);
    
}


