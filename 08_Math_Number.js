// /////////////////     Numbers     /////////////


const score = 100
const balance = new Number(100)
console.log(balance);


console.log(balance.toString().length);
console.log(balance.toFixed(3));

const num = 123.8644
console.log(num.toPrecision(4));


const num1 = 1000000
console.log(num1.toLocaleString('en-pk'));


// ///////////  Maths  //////////////////


console.log(Math.round(4.9));
console.log(Math.abs(-4));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 6, 3, -7, 0,));
console.log(Math.max(-4, 6, 3, 7, 0,));

console.log(Math.random());
console.log(Math.random()*10 + 1);
console.log(Math.floor(Math.random()*10) + 1);




const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);






