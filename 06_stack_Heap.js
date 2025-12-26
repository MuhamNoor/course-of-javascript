// Stack (primitive), Heap (Non-primitive)

//Primitives are copied by value (new copy in stack).

// Stack
let firstname = "noor"
let lastname = firstname
lastname = "rafiq"

console.log(firstname); //noor
console.log(lastname);  //rafiq

//Objects/arrays are copied by reference (both point to same heap memory).
// heap
let obj1 = { name: "noor"}
let obj2 = obj1
obj2.name = "rafiq"

console.log(obj1.name); //rafiq
console.log(obj2.name); //rafiq


let x = 10
let y = x
y = 20

console.log(x);
console.log(y);

let user1 = {email: "noorrafiq123", upi: "user@123"}
let user2 = user1

user2.email = "noorgoogle123"


 console.log(user1.email);  //noorgoogle123
 console.log(user2.email);
 
 

