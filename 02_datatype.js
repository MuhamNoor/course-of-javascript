// Primitive Datatype 

// floating/Number
// String
// Boolean
// Undefined
// Null (object)
// Symbol
// BigInt


// 01_floating datatype
let age = 25
let price = 3274.42
console.table([age, price]);


// 02_String Datatype
let name = "noor"
let message = "hello"
console.table([name, message])


// 03_Boolean Datatype
let isactive = true
let LoggedIn = false
console.table([isactive, LoggedIn])


// 04_undefined datatype
let x
console.log(x);


// 05_null datatype
let data = null
console.log(data);


// 06_Symbol datatype
let sym = Symbol ("id")
console.log(sym);



// 07_BigInt datatype
let big = 123456789
console.log(big);



// Non_Primitive Datatype reference

// Object
// Array 
// Function

// 01_objects
let person = {name: "ali",
     age: 25}
console.log(person);

// 02_array
let fruits = ["mango", "banana", "apple"]
console.log(fruits)

// 03_function
function greet() {
    return "hello" 
}



console.log(typeof 123);        // number
console.log(typeof "hello");    // string
console.log(typeof true);       // boolean
console.log(typeof undefined);  // undefined
console.log(typeof null);       // object  (special case/bug in JS)
console.log(typeof 123n);       // bigint
console.log(typeof Symbol());   // symbol



// let exp = 10
// exp = "hello"
// exp = true
// console.log(exp);


// const id = Symbol('123')
// const anotherid = Symbol('123')

// console.log(id == anotherid);

const myfunction = function(){
    console.log("hello world");
    
}
