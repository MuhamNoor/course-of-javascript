let value = 3
let negvalue = -value
console.log(negvalue); // -13

console.table("1" + 2);   //12
console.table(1 + 2);    // 3
console.table(1 + "2");   //12
console.table("1" + 2 + 2);   //122
console.table(1 + 2 + "2");   //32

let gamecounter = 100
++gamecounter
console.log(gamecounter);

// postfix increment
let x = 3
const y = x++
//output x4 y3

// prefix increment
let x2 = 3n
const y2 = ++x2
//output x2(4) y2(4)



//prefix//
let a = 5
let b = ++a
console.log(a);  /// 6    prefix variable me 2no me + plus hota he
console.log(b);////6


//postfix//
let c = 5
let d = c++
console.log(c);    // 6     postfix variable me 1pele no me 1+ plus hota he doosre me ni
console.log(d);    //5
