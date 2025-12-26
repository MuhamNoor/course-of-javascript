





num.push(6)   //6 add krdega  ===== MOST USE
num.push(7)     
num.pop()       // last value remove krdega (pop)
num.unshift(9)  //start me add kr dega
num.shift()     //start ki number remove krdega
console.log(num);  

let fruit = new Array("apple", "mango", "banana")

// //////////////////      OPERATIONS       ///////////////


console.log(num1.includes(9));  // agr number array ki list me nihoga [0, 1, 2, 3, 4, 5] true false ma answser dega
console.log(num1.indexOf(9));
console.log(num1.indexOf(3)); // jo number array [0, 1, 2, 3, 4, 5] ki list me ni hoga -1 dega agr hoga print kr dega

const  newNum = num1.join()
console.log( newNum); // iski value string me dega 
console.log(num1);

///////////    Slice      /////////////

// let num1 = [0, 1, 2, 3, 4, 5]
console.log("A", num1);
const n1 = num1.slice(1, 4)
console.log(n1);


///////////    Splice      /////////////


// let num1 = [0, 1, 2, 3, 4, 5]
const n2 = num1.splice(1, 4)
console.log("B", num1);
console.log(n2);



let text = "JavaScript";//[ 0 1 2 3 4 5 6 7 8 9 10 ]
console.log(text.length);
console.log(text.toUpperCase());
console.log(text.slice(0, 4));




const fruits = ["apple", "banana", "mango"]
const name = ["john", "wick", "mikle"]
// fruits.push(name)
// console.log(fruits);
//[ 'apple', 'banana', 'mango', [ 'john', 'wick', 'mikle' ] ]



const Allarray = num.concat(car)
console.log(Allarray);
//[ 0, 1, 2, 4, 5, 'toyota', 'suzuki', 'honda' ]





////////////   Spreads Method in Array  ///////////
/////////////// Combined    //////////

// const num = [0, 1, 2, 4, 5]
// const car = ["toyota", "suzuki", "honda"]
const AllArrayItem = [...fruits, ... name, ...num, ...car]
console.log(AllArrayItem);
/*
  'apple',  'banana', 'mango', 
  'john',   'wick',   'mikle', 
  0,        1,        2,       
  4,        5,        'toyota',
  'suzuki', 'honda']
*/


const newArray = [1, 2, 3, 4, 5, [8, 1, 3, [2, 6, 8, 4, [1, 4, 6, 7, 4]]]]
const AnotherArray = newArray.flat(Infinity)
console.log(AnotherArray);
/*[
  1, 2, 3, 4, 5, 8, 1,
  3, 2, 6, 8, 4, 1, 4,
  6, 7, 4
]*/

console.log(Array.isArray("karachi"));   //false
console.log(Array.from("karachi"));      //['k', 'a', 'r', 'a', 'c', 'h', 'i']
console.log(Array.from({name: "karachi"}));//  Imp for Interview    // [] key not defined


let score = 100
let score1 = 200
let score2 = 500
console.log(Array.of(score, score1, score2));
// [ 100, 200, 500 ]  Convert to Array\




//  ===========      Basics ForEach

array.forEach(function(currentValue, index, array) {
  //  code to execute
});


// Simple basic 
const Fruits = ['apple', 'banana', 'mango']
Fruits.forEach(function(Fruits){
console.log(Fruits);
})


//   ====     Example with Index

const numbers = [1, 2, 3, 4, 5]
numbers.forEach(function(num, index){
console.log(`index: ${index}, value: ${num}`);
})
// index: 0, value: 1
// index: 1, value: 2
// index: 2, value: 3
// index: 3, value: 4
// index: 4, value: 5

// ====     Using Arrow Function

const color = ['red', 'green', 'orange']
color.forEach((color, index) => {
console.log(`${index + 1}: ${color}`);
})

// ===    Modifying Array Values (with a condition)
  
let price = [100, 200, 300, 400]
let discount = []
price.forEach((price) => {
discount.push(price - 50)
})
console.log(discount);

// ===    Accessing the Original Array

let Name = ['noor', 'ali', 'sam']
Name.forEach((Name, index, array) => {
  console.log(`Name is ${Name}, Array length is ${array.length}`);
})

// ======   Practical Example: Sum of Array Elements

let counting = [2, 4, 6, 8, 10]
let sum = 0
counting.forEach(counting => {
  sum += counting
})
console.log("Total Num is:", sum);

// ===     Array in OBject      

let students = [
{ name: 'noor', mark: 65 },
{ name: 'ali', mark: 54 },
{ name: 'sam', mark: 23 }
]
students.forEach(students => {
  console.log(`${students.name} score is ${students.mark}`);
})

let cart = [ 100, 200, 300]
let total = 0
cart.forEach((price) => {
  total += price
})
console.log("Total:", total);
