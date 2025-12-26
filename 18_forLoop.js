for (let index = 0; index <= 5; index++) {
    const element = index;
    console.log(element);
}

// Loop Through an Array
const myarray = ['apple', 'banana', 'manogo']

for (let index = 0; index < myarray.length; index++) {
    console.log(myarray[index]);   
}


//Loop with break

for (let index = 1; index <= 10; index++) {
    if (index === 5) {
        console.log('detected');
        break
    }
    console.log(index);
}

//  Loop with continue
//  Skips one iteration and continues.

for (let index = 1; index <= 10; index++) {
    if( index === 3){
        console.log('detected');
        continue
    } 
    console.log(index);
}

//     Loop reverse

for (let index = 5; index >= 1; index--) {
    console.log(index);  
}







