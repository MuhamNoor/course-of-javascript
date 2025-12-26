let age = 18
if (age >= 18) {
    console.log('adult')
}else{
    console.log("minor");
}



// let a = 20, b = 99, c = 45, d = 89;

// let largest =
//   a > b && a > c && a > d ? a :
//   b > c && b > d ? b :
//   c > d ? c :
//   d;

// console.log(`is large ${largest}`);

let a = 20, b = 99, c = 45, d = 89;
if (a > b && a > c && a > d) {
    console.log(`is large ${a}`);  
} else if (b > c && b > d) {
     console.log(`is large ${b}`);
}else if (c > d) {
     console.log(`is large ${c}`);
} else{
    console.log(`is large ${d}`);
}





let score = 81
if (score >= 90) {
    console.log('grade is A+');
} else if (score >= 80) {
    console.log('grade is B');    
}else{
    console.log( 'C is faled');
}


// for (let i = 1; i < 10+11; i++) {
//    console.log(i);
// }

let num = [9]
if (num % 2 === 0) {
    console.log(num + ' is even number');
}else{
    console.log(num + ' is odd number');
}

let number = [1,2,3,4,5,6,7,8,9,10];
let EvenNumber = [];
let OddNumber = [];
for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 === 0 ) {
        EvenNumber.push(number[i])
    }else{
        OddNumber.push(number[i])
    }
    
}
console.log('EvenNumber is',EvenNumber);
console.log('OddNumber is', OddNumber);


const price = [100, 200, 300, 400]
 const discount = []
 price.forEach((price, index) => {  //price.forEach(function(price, index){
     if(index === 0){
         discount.push(price - 50)
     }else{
       discount.push(price)  
     }
     })
     console.log(discount)
    //  [       50, 200, 300, 400 ]


    // let count = [2,3,45,6,78,8]
    // let sum = []
    // count.forEach(count => {
    //     sum += count
    // })
    // console.log(`sum is ${sum}`);



        let counts = [2,3,45,6,78,8]
    function getsum(arr){
        let sum = 0
        arr.forEach(count => {
            sum += count
        })
    }
    console.log(getsum(count))



    
    let name = ['noor', 'ali', 'khan']
    name.forEach((name, index, Array) => {
        console.log(`name is ${name}, index: ${index + 1} array length is ${Array.length}`);
        
    })
    


    let naam = [
        {name: 'noor', studentmark: 91},
        {name: 'sam', studentmark: 65},
        {name: 'ali', studentmark: 32},
    ]
naam.forEach(function(naam){
if (naam.studentmark > 90) {
    console.log(naam.name + ' grade is A+');
}else if (naam.studentmark > 70) {
    console.log(naam.name + ' grade is B');
} else {
    console.log(naam.name + ' c fale'); 
}
})


const course = [
    {
        name: 'java',
        price: 1000
    },
    {
        name: 'javaScript',
        price: 5000
    },
    {
        name: 'python',
        price: 2000
    },
    {
        name: 'c',
        price: 3000
    },
]
const final = course.reduce((acc, item) => acc + item.price,0)
console.log(final); // price k sare total kr dega 11000


const pl = [
    {
        name: 'java',
        price: 1000
    },
    {
        name: 'javaScript',
        price: 5000
    },
    {
        name: 'python',
        price: 2000
    },
    {
        name: 'c',
        price: 3000
    },
]
const tootal = pl.find(item => item.name === 'java') 
console.log(tootal.name, tootal.price);


let arr = [1, 2, 3]
const saree = arr.reduce(function(Accumulator, currentvalue) {
    console.log(`Accumulator is ${Accumulator}, currentvalue is ${currentvalue}`);
    return Accumulator + currentvalue
},0)
console.log(saree);


// How can you count occurrences of each element using reduce()?
 
const alpha = ['A', 'B', 'A', 'B', 'A', 'C']
const total = alpha.reduce((acc, alpha) =>{
    acc[alpha] = (acc[alpha] || 0) + 1;
    return acc;
},
{});
console.log(total);//{ A: 3, B: 2, C: 1 }



// How can you find the maximum number in an array using reduce()?
 const nams = [20, 40, 50 ,24, 80, 98,98]
 const max = nams.reduce((acc, val) => (val > acc ? val : acc ), nams[0])
 console.log(max);//  98
 

// filter
let arr1 = [1,2,3,4,5,6,7,8.9,10]
let res = arr1.filter((arr1) => arr > 6)
console.log(res)  // [7,8,9,10]


//forEach
const insertarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const emptyArray = []
insertarray.forEach((item) => {
    if (item > 6) {
        emptyArray.push(item)
    }
    else{
    }
})
console.log(emptyArray);



const numb = [1,2,3,4,5,6,7,8.9,10]
const even = numb.filter(numb => numb % 2 === 0) 
console.log(even)



const product = [
    {name: 'Laptop', price: '20,000'},
    {name: 'Mobile', price: '30,000'},
    {name: 'Watch', price: '2000'},
    {name: 'Airbuds', price: '3000'},
    {name: 'PowerCable', price: '1000'},
    {name: 'Powerbank', price: '3500'},
]
const afordable = product.filter(item => item.price <= 5000)
console.log(afordable);


const Age = [20, 50, 59, 30, 20, 24]
const adults = Age.filter(item => item >= 18)
console.log(adults);


const newarr = [1, 2, 2, 5, 34, 5, 6, 8]
const dubli = [...new Set(newarr)]
console.log(dubli);



//  remove dublicate through filter & index of
const Dublicate = [12, 3, 3, 3, 33, 3, 33, 3, 45, 6, 7]
const removeDublicate = Dublicate.filter((value, index) => Dublicate.indexOf(value) === index)
console.log(removeDublicate);

//  print only dublicate

const Dub = [11, 22, 33, 45, 66, 77, 77, 777, 77]
const removeDub = Dub.filter((value , index) => {
return Dub.indexOf(value) !== index
})
console.log(removeDub);


// const newarr = [1, 2, 2, 5, 34, 5, 6, 8]
// const dublicate = newarr.filter((value, index) => newarr.indexOf(value) !==index )
// console.log(dublicate); 
// [2,5]



// const newarr = [1, 2, 2, 5, 34, 5, 6, 8]
// const dublicate = newarr.filter((item, index) => {
//     return newarr.indexOf(item) === index
// })
// console.log(dublicate);
// [1, 2, 5, 34, 6, 8]




// let user = ['noor', 'aniq', 'atiq', 'taha']
// for (let i = 0; i < user.length; i++) {
//     console.log(user[i]);
// }



// let index = 0
// while (index <= 5) {
//     console.log(index);
//     index++
// }



// let i = 1
// do {
//     console.log(i);
//     i++
// } while (10 < 10);



// let battery = 90
// while (battery < 100) {
//     console.log(`Charging... ${battery}`);
//     battery++
// }



// Login Attempt System (Real Project Example)
let attempt = 0
let maxAttempt = 3
while (attempt < maxAttempt) {
    console.log(`Login attempt is ${attempt + 1}`);
    attempt++
}
console.log(`Too many attempt please try again letter ${maxAttempt}`);


//  Loading Spinner Until Data Arrives
let dataload = false
let counter = 0
while (!dataload) {
    console.log(`Loading...`);
    counter++
if (counter === 3) {
    dataload = true
    }
}
console.log('Data load Sucessfully');



//  Remaining stock check
let stock = 5
while (stock > 0) {
    console.log(`remaining stock is ${stock}`);
    stock--
}
console.log('out of stock');



//  Payment Retry Until Successful
let payementSucess = false
let tries = 0
while (!payementSucess && tries < 3) {
    console.log('loading...');
    tries++
if (tries === 3) {
    payementSucess = true
    }
}
console.log('payement' + (payementSucess ? 'sucess' : ' falied'));
 



// Atm pin checker


// let CardPin = '4532';
// let pin;
// let attempts = 0;

// do {
//     pin = prompt('Enter Your ATM Card PIN: ');
//     attempts++;

//     if (attempts === 3 && pin !== CardPin) {
//         console.log('Your ATM card is blocked.');
//         break;
//     }

// } while (pin !== CardPin);

// if (pin === CardPin) {
//     console.log('Your PIN is correct.');
// }


function addnumm(num1, num2) {
    console.log(num1 + num2);
}
addnumm(3, '3')


function addtwo(a1, a2) {
    // let n = a1 + a2 
    // return n
    // or
    return a1 + a2
}
const REs = addtwo(3,5) 
console.log(`result: ${REs}`);



function greet(name) {
    return 'hello' + name 

}
console.log(greet( ' noor'));
