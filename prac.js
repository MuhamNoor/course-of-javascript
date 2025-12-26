
// let arr1 = [1,23,4,56]
// let arr2 = [1,5,6,7,8]
// let Spreadarr = [...arr1,...arr2]
// console.log(Spreadarr);

    // let age = 18
    // if (age >= 18) {
    //     console.log("adult");  
    // }else{
    //     console.log('minor');
    // }

// let age = 18
// let result = age >= 18 ?  "adult" : 'minor'
// console.log(result);

// let a = 20, b = 99, c = 45, d = 89;
// let largeNum = 
// a > b && a > c && a < c ? a :
// b > c && b > d ? b :
// c > d ? c :
// d;
// console.log(largeNum);

// let score = 90
// let grade = score >= 80 ? 'A' :
//             score >= 70 ? 'b' :
//             score >= 60 ? 'c' : 'fAIL'
//             console.log(grade);
            

//  let score = 40
//  if (score >= 80) {
//     console.log("A");
    
//  }else if (score >= 70) {
//     console.log("b");
//  }else{
//     console.log("C : fail");
    
//  }


// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// let arr = 10
// if (arr % 2 === 0) {
//     console.log("even");
    
// }else{
//     console.log("odd");
    
// }
// let num = 10
// let resule = num % 2 === 0 ? 'even' : "odd"
// console.log(resule);

// let number = [1,2,3,4,5,6,7,8,9,10];
// let EvenNumber = [];
// let OddNumber = [];
// for (let i = 0; i < number.length; i++) {
//     if (number[i] % 2 === 0) {
//         EvenNumber.push(number[i])
//     }else{
//         OddNumber.push(number[i])
//     }
// }
// console.log(EvenNumber);
// console.log(OddNumber);



// let number = [1,2,3,4,5,6,7,8,9,10];
// let EvenNumber = [];
// let OddNumber = [];
// for (let i = 0; i < number.length; i++) {
//     number[i] % 2 === 0 ? EvenNumber.push (number[i]) : OddNumber.push (number[i])      
// } 
// console.log(`EvenNumber is ${EvenNumber}`);
//  console.log(`OddNumber is ${OddNumber}`);

// const price = [100, 200, 300, 400]
//  const discount = []
//  price.forEach((value, index) => {
//     if (index === 0) {
//         discount.push(value - 50)
//     }
//     else{
//         discount.push(value)
//     }
//  })
//  console.log(discount);
 
// const price = [100, 200, 300, 400]
// const discount = []
// price.forEach((value, index) => {
//     index === 0 ? discount.push(value - 50) : discount.push(value)
// })
// console.log(discount);


// let count = [100, 200, 300, 400]
// let sum = []
// count.forEach(count => {
//     sum += count
// })
// console.log(sum);



// let name = ['noor', 'ali', 'saim']
// name.forEach((name, index, array) => {
//     console.log(`Name is ${name},index is ${index + 1}, length is ${Array.length}`);
// });


// let arr = [
//   {name: 'noor', marks: 91},
//   {name: 'ali', marks: 81},
//   {name: 'saim', marks: 70},
// ]
// arr.forEach((arr) => {
//   if (arr.marks > 90) {
//     console.log(arr.name + "grade is A+");
//   }else if (arr. marks > 80) {
//     console.log(arr.name + 'grade is B');
//   }else {
//     console.log(arr.name + 'grade is c : Fail');
//   }
// })

// let course = [
//   {name: 'java', price: 1000},
//   {name: 'py', price: 1200},
//   {name: 'c++', price: 1500},
// ]
// let final = course.reduce((acc, val) => acc + val.price , 0)
// console.log(final); // 3700


// let course = [
//   {name: 'java', price: 1000},
//   {name: 'py', price: 1200},
//   {name: 'c++', price: 1500},
// ]
// let total = course.find(val => val.name === 'py')
// console.log(total.name, total.price);




// let array = [1, 2, 3, 4, 5]
// let total = array.reduce((acc, val) => {
//   console.log(`acc val is ${acc} val is ${val}`);
//   return acc + val
// }, 0)
// console.log(total);



// let arr = ['A', 'B', 'A', 'B', 'A', 'C'];
// let combine = arr.reduce((acc, val) => {
//     acc[val] = (acc[val] || 0) + 1
//     return acc
// },
// {})
// console.log(combine);

//  const num = [20, 40, 50 ,24, 80, 98,98]
//  let max = num.reduce((arr, val) => (val < arr ? arr : val),0)
//  console.log(max);

// let arr = [1,2,3,4,5,6,7,8.9,10]
// let res = arr.filter((val) => val > 6)
// console.log(res);

// let arr = [1,2,3,4,5,6,7,8,9]
//  let emp = []
//  arr.forEach(element => {
//     if (element < 6) {
//         emp.push(element);
//     }
//  });
//  console.log(emp);
 
// or

// let arr = [1,2,3,4,5,6,7,8,9]
// let emp = []
// arr.forEach(val => val > 6 ? emp.push(val): null)
// console.log(emp);



// const arr = [1,2,3,4,5,6,6,6]
// const dub = arr.filter((val, index) =>{
    //    return arr.indexOf(val) 
    // })
    // console.log(dub); // [6, 6]
    

    
// const newarr = [1, 2, 2, 5, 34, 5, 6, 8]
// const dubli = [...new Set(newarr)]
// console.log(dubli); // [ 1, 2, 5, 34, 6, 8 ] 
    
    
    
// const arr = [1,2,3,4,5,6,6,6]
// const dubli = [new Set(
//     arr.filter((val, index) => arr.indexOf(val) !== index))]
//     console.log(dubli);



// let user = ['noor', 'aniq', 'atiq', 'taha']
// for (let i = 0; i < user.length; i++) {
//     console.log(user[i]);
// }
    


// let index = 0
// while (index <= 5) {
//     console.log(index)
//     index ++
// }


// let index = 0
// do {
//     console.log(index);
//     index++
// } while ( index < 10);

// let Sym = symbol('key')
//   let obj = {
//     name: 'noor',
//     [sym]: 'key',
//     age:    34,
//     email: 'noorrafiq',
//     location: 'karachi',
//     lastloging: ['karachi', 'lahore'],
//     isLogin: 'false'
//   }
//   console.log(obj);
//   console.log(obg[Sym]);

  
  function LoginUserMessage(username = 'sam') {
    if (username === undefined) {
      console.log('enter username');

      return
    }
    return `Just loggin ${username}`
    
  }
  console.log(LoginUserMessage('noor'));
  