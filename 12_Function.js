function numbers() {
    console.log(0);
    console.log(1);
    // console.log(2);
    // console.log(3);
    // console.log(4);
    // console.log(5);
    // console.log(6);
}
numbers()

   //                   basic function


    //           Method 1

function addtwonumbers(number1, number2) {
    console.log(number1 + number2);
}
addtwonumbers()
addtwonumbers(3, 7)
addtwonumbers(4, "6")
addtwonumbers(3, "a")
addtwonumbers(6, null)

    //           Method 2

    function addtwonumbers(number1, number2) {
    //  let result = number1 + number2  //   ye b theek he
    //  return result     
    return number1 + number2
 }
 const result = addtwonumbers(4, 6)
 console.log("Result: ", result); 
 // 10 print


 function LoggedInUser(username = "sam") {
    if(username === undefined){
        console.log("please enter username");
        return
    }
    return`${username} just logged in`
 }
// console.log(LoggedInUser("Noor"))
console.log(LoggedInUser("Noor"));




//      FUNCTION WITH OBJECTS AND ARRAYS



// rest parameter example
function CalculatePriceCart(val1, val2, ...num1) {  /*inter me pochte he val1 or val2 k logic,
                                              dono jaga value ni aige jo likhe hoge*/
    return num1
}
console.log(CalculatePriceCart(100, 200, 300, 400, 500))
//Interviewer kya puchta hai?
// val1 aur val2 ka logic kya hai? Aur num1 me sirf baaki values kyun aati hain?”
// Answer (Simple Explanation):
// val1 → pehli value le lega
// val2 → dusri value le lega
// ...num1 → baaki jitni bhi values hongi unko ek array me collect kar lega.
// Isliye aap jab ye call karte ho:

//      FUNCTION IN OBJECT 

const user = {
    username: "noor",
    id: "1234"
}

function handleObject(otherobject) {
    console.log(`username is ${otherobject.username} and id is ${otherobject.id}`);
}

// handleObject(user)
// Object se b bna sakte he
handleObject({
    username: "sam",
    id: 435
})


// FUNCTION IN ARRAYS

let myArray = [100,  200, 300 , 400, 500]
function returnArray(Getarray) {
    return [Getarray[1], Getarray[3]]
}
//console.log(returnArray(myArray));
console.log(returnArray([100,  200, 300 , 400, 500]));


//          if else

let name = 'Noor'
const age = 25
function introduce(params) {
    if (age>=18) {
        "Hello, my name is " + name + " and I am an adult."
    }
    else{
        console.log("Hello, my age is " + age); 
    }
}
introduce();
console.log(introduce());

 