const temperature = 41
if (temperature === 41) {
    console.log("less than 41");
}
else{
    console.log('greater than 50');
}


// Scope
const score = 200
if (score > 100) {
    const power = 'fly'
    console.log(`user power: ${power} `);
}
//  console.log(`user power: ${power} `);


// if (true) {
//   var a = 10;   // Function-scoped
//   let b = 20;   // Block-scoped
//   const c = 30; // Block-scoped
// }

// console.log(a); // ✅ Works (var ignores block scope)
// console.log(b); // ❌ Error
// console.log(c); // ❌ Error


const price = 1000
if (price < 500) {
    console.log('less than 500');  
}
else if (price < 700) {
    console.log('less than 700'); 
}
else if (price < 800) {
    console.log('less than 800'); 
}
else if (price < 900) {
    console.log('less than 900'); 
}
else  {
    console.log('less than 1200'); 
}
console.log();


//      real life use if 
const userLoggedIn = true
const DebitCard = true
const isLoggedInfromemailAccount = false
const isLoggedInfromGoogleAccount = true
const successLogin = false

if (userLoggedIn && DebitCard && 2==2) {
    console.log('Allow to Buy');
}
if (isLoggedInfromGoogleAccount || isLoggedInfromemailAccount || successLogin) {
    console.log('User loggedIn');
}

//      Switch Case 

const month = 4
switch (month) {
    case 1:
        console.log('jan');
        break;
    case 2:
        console.log('feb');
        break;
    case 3:
        console.log('mar');
        break;
    case 4:
        console.log('apr');
        break;
    default:
        console.log('hello');
        break;
}


//  truethy / falsy value
//  suppose data base se email a jai\

const useremail = [] //  Age email ko hata do to else condition print hoge
if (useremail) {
    console.log('received an email');
}
else{
    console.log('Didnt received email');
}
// false, 0, -0, BigInt 0n, "", null, undefined, Nan
// truethy = "0", '', 'false', [], {}, function()[]

//      Check Empty Array
if (useremail.length === 0) {
    console.log('array is empty');
}

const checkEmptyObj = {}
if (Object.keys(checkEmptyObj).length) {
    console.log('object is empty');
}

//  false == 0 (true)
//  false == ''(true)
//  0 == ''(true)


//  nullesh coaliescing operators

// Defination Koi value print na ho to dusree value print ho jai 


let val;
val = 14 ?? 10
val1 = 65 ?? null
val2 = null ?? 32
val3 = undefined ?? 21
val4 = 14 ?? undefined
val5 = 14 ?? 10 ?? 54
val6 = 14 ?? undefined ?? 12
console.log(val);
console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);
console.log(val5);
console.log(val6);





//       Project 1: User Profile Settings System
//       If the user doesn’t set their preferences, use safe default values. 
const UserSetting = {
    theme: null,
    Notification: false,
    fontSize: undefined,
}
const FinalSetting = {
    theme:UserSetting.theme ?? "light",
    Notification:UserSetting.Notification ?? true,
    fontSize:UserSetting.fontSize ?? 35
}
console.log(FinalSetting);



//      Project 2: E-Commerce Product Checkout
//      Goal: Display correct price, even if discount or quantity is 0.

const product = {
    name: 'smartwatch',
    price: 5000,
    discount: 0,
    stock: null,
    manufactor: 'amazon',
}
const finalprice = (product.price - product.discount) ?? product.name
const availablestock = product.stock ?? 'out of stock'
const manufactor = product.manufactor ?? "amazon"
console.log(`Product Name: ${product.name}`);
console.log(`Final Price: ${finalprice}`);
console.log(`Available Stock: ${availablestock}`);
console.log(`manufactoring: ${manufactor}`);



//     Project 3: Server Config (Node.js or Web App)
//      Use environment variables safely — fallback to default if missing.

const missinfdata = {
    DB_port: null,
    DB_URL: undefined,
    DB_DebugMode: false,
}
const confiq = {
    port: missinfdata.DB_port ?? 3000,
    url: missinfdata.DB_URL ??  "mongodb://localhost:27017/myapp",
    debug:missinfdata.DB_DebugMode ?? true
}
console.log(confiq);


//      Ternary Operator?
//      condition ? expressionIfTrue : expressionIfFalse


let age = 20
let result = (age >= 18) ? 'adult' : 'minor'
console.log(result);


let Teaprice = 300
Teaprice <= 400 ? console.log("han zada he") : console.log("han kam he");



//      Example with Function

function CheckLogIn(isLoggin){
return  isLoggin ? "Welcome Back" : "Please Login in First"
}
console.log(CheckLogIn(true));
console.log(CheckLogIn(false));



//      Mini Project Example: Login System

const user = {
    name: 'noor',
    isloggedin: 'true',
    Admin: 'false',
}

let access = user.isloggedin ? (user.Admin ? 'welcome admin' : 'welcome user') :  'please login'
console.log(access);
