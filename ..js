// let number = [1,2,3,4,5,6,7,8,9]
// let EvenNumber = []
// let OddNumber = []
// for (let i = 0; i < number.length; i++) {
//     if (number[i] % 2 === 0) {
//         EvenNumber.push(number[i])
//     }else{
//         OddNumber.push(number[i])
//     }
    
    
    
// }
// console.log(`even num is ${EvenNumber}`);
//     console.log(`odd num is ${OddNumber}`);


//     let price = [100, 200, 300, 400]
//     let discount = []
//     price.forEach((price, index ) => {
//         if (index === 0) {
//             discount.push(price - 50)
//         }else{
//             discount.push(price)
//         }
        
//     })
//     console.log(discount);

// let count = [2,4,6,8,10]
// function getsum(arr) {
//     let sum = []
//     arr.forEach(e => {
//         sum += e 
//     });   
//     return sum
// }
//  console.log(getsum(count));

// let count = [2,4,6,8,10]
// let sum = 0
// for (let i = 0; i < count.length; i++) {
//     sum += count[i]
    
// }
// console.log(sum);

// let num = [1,2,3,4,5,6]
// let sum = num.reduce((acc, val) => acc + val,0)
// console.log(sum);


// let course = [
//     {name: 'java', price: 1000},
//     {name: 'python', price: 2000},
//     {name: 'php', price:31000},
//     {name: 'C++', price: 4000},
// ]
// let final = course.find(val => val.name === 'php')
// console.log(final.name, final.price);



// let num = 43
// let str = String(num)
// console.log(str);
// console.log(typeof str);

// let str = 'noor'
// let num = Number(str)
// console.log( typeof num);


// let a = '20'
// let b = 1
// let c = 4
// console.log(a + b + c)            // 2014
// console.log(Number(a)+ b + c)    // 25
// console.log(String(b)+ a + c)   // 1204
// console.log(Number(c)+ b + a)    // 2014
// console.log(Boolean(b))          // true
// console.log(Boolean())           // false



// //pretflix
// let a = 5
// let b = ++a
// console.log(a);
// console.log(b);


// // postflex

// let A = 5
// let B = A++
// console.log(A);
// console.log(B);



// let array = [18, 52, 36, 4, 25, 65]
// let newArray = array.slice(1, 3)
// console.log('slice is:', newArray);

// let newarray = array.splice(1, 3)
// console.log('splice is:', newarray);


// for (let i = 0; i < 10; i++) {
//    if (i % 2 === 0) {
//     console.log(i);
//    }
// }

// let age = 18
// if (age >= 18) {
//     console.log("adult");
    
// }else{
//     console.log('minur');
    
// }

// let food = "biryani"
// let price = 300
// console.log(`food is ${food} and price is ${price}`);


//  let num = 20
//  if (num >= 10) {
//     console.log('big number');
//  }else{
//     console.log('small number');
//  }

//   let name = "admin"
//  if (name == "") {
//     console.log('welcome admin');
//  }else{
//     console.log('access denied');
//  }

// let mark = 30
// if (mark >= 50) {
//     console.log('pass');
// }else{
//     console.log('fail');
// }

// let marks = 100
// let result = marks >= 50 ? "pass" : "fail" 
// console.log(result);


// let password = 1234
// let result = password === 1234 ? 'login sucessfully' : 'wrong password'
// console.log(result);

// let time = 10
// let res = time > 10 ? 'good morning' : 'good day'
// console.log(res);

//Age 18 se zyada aur CNIC hai → eligible

// let age = 16
// let cnic = true
// if (age >= 18 && cnic === true) {
//     console.log('age is eligible');
// }else{
//     console.log('not eligible');
// }


// let shoesColor = ['green', 'white', 'blue', 'yellow', 'white']
// // console.log(shoesColor[4]);
// // console.log(shoesColor.length);
// // console.log(shoesColor[1] = 'yellow');
// console.log(shoesColor.push('pink'));

//  let shoesColor = ['green', 'white', 'blue', 'yellow', 'white']
// // for (let i = 0; i < shoesColor.length; i++) {
// //     console.log(shoesColor[i]);
// // }

// let i = 0
// while (i < shoesColor.length) {
//     console.log(shoesColor[i]);
//     i++
// }

// for (let i = 0; i < 10; i++) {
//     if (i % 2 === 0) {
//        console.log(i); 
//     }
// }

// let i = 1
// let n = 5
// while (i <= n) {
//     console.log(i * i);
//     i++
// }

// for (let i = 1; i <=20; i++) {
//     if (i % 2 !== 0) {
//         console.log(`odd num is:`, i);   
//     }
// }


// for (let i = 0; i <= 5; i++) {
//     console.log(i * i);
// }

// for (let i = 0; i < 20; i++) {
//     if (i % 2===0) {
//         console.log(`Even Num:`, i); 
//     }
// }
// for (let i = 1; i < 10; i++) {
//     if (i >= 5) {
//         console.log(i);
        
//     }
    
// }

// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let EvenNum = []
// let OddNum = []
// for (let i = 0; i < number.length; i++) {
//     if (number[i] % 2 === 0) {
//         EvenNum.push(number[i])
//     }else{
//         OddNum.push(number[i])
//     }
//     }
//     console.log(EvenNum);
//     console.log(OddNum);


// for (let i = 0; i < 10; i++) {
//    if (i % 3 === 0) {
//      console.log(i*i);
     
//    }
    
// }
    

// for (let i = 1; i <= 3; i++) {
//     console.log('student',i);
//     for (let j = 1; j <= 2; j++) {
//         console.log('student', j);
        
        
//     }
    
// }

// for (let i = 1; i <= 3; i++) {
//     let row = ''
//     for (let j = 1; j <= 3; j++) {
//     row += i + ''
// }
// console.log(row);

// }


// function sayhello() {
//     console.log('hello world');
    
// }
// sayhello()


// function addNum(a, b) {
//     return a + b
// }

// let result = addNum(2,2)
// console.log('result:', result);

function checknum(num) {
    if (num % 2 === 0) {
        console.log(`even num ${num}`);
        
    }else{
        console.log(`odd num ${num}`);
        
    }
}
checknum(8)
checknum(8)


