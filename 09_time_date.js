let mydate = new Date()
// console.log(mydate.toString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);


// let CreateDate = new Date(2025, 9, 29, 5, 3 )
let CreateDate = new Date('01-14-2025')
console.log(CreateDate.toLocaleDateString());



///////////////    Time       //////////////

let TimeStamp = Date.now()
console.log(TimeStamp);
console.log(CreateDate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1 );
// console.log(newDate.getHours());
// console.log(newDate.getSeconds());
// console.log(newDate.getUTCMinutes());
// console.log(newDate.getDay());
// console.log(newDate.getMonth());



// IPMORTANT
console.log(newDate.toLocaleString('default',{
    weekday: "narrow",
}));



let my = new Date
console.log(my.toDateString());     //Sun Oct 05 2025
console.log(my.toISOString());      //2025-10-05T12:33:26.317Z
console.log(my.toJSON());       //2025-10-05T12:33:26.317Z
console.log(my.toLocaleDateString());   //10/5/2025 
console.log(my.toLocaleTimeString());   //5:33:26 PM
console.log(my.toLocaleString());   //10/5/2025, 5:36:29 PM







