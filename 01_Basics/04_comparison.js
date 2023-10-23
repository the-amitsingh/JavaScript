// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2" >1);
// console.log("02" > 1);


// console.log(null > 0 );
// console.log(null == 0 );
// console.log(null >= 0);
// the reason is that an equality check == and comparisons > <> = <= work differently 
// comparisons convert null to a Number, treating it as 0 . 
// That's why(3) null >=0 is true and (1) null >0 is false 


console.log(undefined == 0 );
console.log(undefined > 0 );
console.log(undefined < 0 );

// === ( strict check  it compares and check the datatypes also  )
console.log("2" === 2);
 