//      while loop

let index = 0
while (index <= 10) {
    console.log(index);
    index ++
}

// with array

let myarray = ['apple', 'banana', 'manogo']
let arr = 0
while (arr < myarray.length) {
    console.log(myarray[arr]);
    arr = arr +1
}


let i = 1
while (i <= 5 ) {
    console.log(`Number is: ${i}`);
    i++
}


//      Reverse Countdown
let j = 5
while (j > 0) {
    console.log(`Countdown: ${j}`);
    j--
}

//      While loop with condition check
 
let p = 0
while (p <= 10) {
    console.log(`even number is: ${p}`);
    p = p + 2
}
//      OR
let k = 0
while (k < 10) {
    if( k % 2 === 0){
        console.log('even number is', k);      
    }
     k++ 
}