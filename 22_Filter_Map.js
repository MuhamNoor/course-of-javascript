const myarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newnum = myarr.filter((num) => num > 6) // The callback (num) => num > 6 runs for each element in myarr.
console.log(newnum); // output [ 7, 8, 9, 10 ]
    
// or

const putarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const getnum = myarr.filter((val) => {
return val > 4}) // The callback (num) => num > 6 runs for each element in myarr.
console.log(getnum); // output [ 5, 6, 7, 8.9, 10 ]

// foreach
const insertarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const emptyArray = []
insertarray.forEach((num) => {
if (num > 2) {
    emptyArray.push(num)
}
})
console.log(emptyArray);


const books = [
    {
     Title: 'Book One', Genera: 'Non-Fiction', Publish: 1965, Edition: 1994
     },
    {
     Title: 'Book two', Genera: 'Fiction', Publish: 1923, Edition: 2001
     },
    {
     Title: 'Book three', Genera: 'BIO', Publish: 1998, Edition: 2002
     },
    {
     Title: 'Book four', Genera: 'science', Publish: 1912, Edition: 2006
     },
    {
     Title: 'Book five', Genera: 'science', Publish: 1909, Edition: 1999
     },
    {
     Title: 'Book six', Genera: 'phy', Publish: 1925, Edition: 1998
     },
    {
     Title: 'Book seven', Genera: 'computer', Publish: 1990, Edition: 1991
     },
]

let Userbooks = books.filter((bk) => bk.Genera === 'science')
Userbooks = books.filter((bk) => { 
    return bk.Publish >= 1909 && bk.Genera === 'science'})
console.log(Userbooks);


/* const letNum = [1, 2, 3, 4, 5, 6, 7, 8 ,9 ,10]
 const nayaNum = letNum.map((num) => num + 10)  // or {return num + 10} sam kam hoga Scope on hoga to return lagega 
 console.log(nayaNum);
 [
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]*/



// double map and filter execute
const letNum = [1, 2, 3, 4, 5, 6, 7, 8 ,9 ,10]
 const nayaNum = letNum
                .map((num) => num * 10)  // or {return num + 10} sam kam hoga Scope on hoga to return lagega 
                .map((num) => num + 1 )
                .filter((num) => num >= 40)
 console.log(nayaNum);

/*
 const kamnum = [1, 2, 3]
 const mytotal = kamnum.reduce(function(accumulator, currentvalue){
    console.log(`Accumulator value ${accumulator} currentvalue ${currentvalue}`);
    
    return accumulator + currentvalue
 }, 0) // coma k bd jo b value do wo print hoge,
 console.log(mytotal);
*/

 // Arrow Function

const kamnum = [1, 2, 3]
const mytotal = kamnum.reduce((Accumulator, Currentvalue) => Accumulator + Currentvalue,0 )
console.log(mytotal);
 

const CourseShopping = [
    {cource: 'js', price: 1000},
    {cource: 'py', price: 2000},
    {cource: 'php', price: 3000},
    {cource: 'java', price: 4000 },
]
const total = CourseShopping.reduce((accumulator, item) => accumulator + item.price, 0)
console.log(total);



// remove dublicate Number 
const myArray = [1, 2, 3, 4, 5, 2, 5];
const duplicates = myArray.filter((item, index) => {
  return myArray.indexOf(item) !== index;
});
console.log(duplicates);