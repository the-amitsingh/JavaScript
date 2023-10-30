//for in loop in object 

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb:"RUBY",
    swift : "Swift by appple "

}
for (const key in myObject) {
   //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb","py","java","cpp"]
for (const key in programming) {
   //console.log(programming[key]);
}


const map = new Map()
map.set('IN', "INDIA")
map.set('Fr', "France")
map.set('Ra', "Russia")
map.set('IN', "INDIA")

for (const key in map) {
   console.log(key);
}