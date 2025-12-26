/*
                Memory phase
memory phase k andr sare variable store hote he

                Execution phase
Execution Phase wo stage hoti hai jahan JavaScript engine code actually chalata hai 
— yaani variables ko real values milti hain aur functions run hote hain.




 1 Global Execution
        this

2 Memeory Phase                        (3)  1  execution phase
    val1 -> undefined                       2     val1  10
    val2 -> undefined                       3     val2   5
    addNumn -> Defination                   4     addNum ------> new variable envirement
    result1 -> undefined                          result 15                 +
    result2 -> undefined                                            execution thread               
                                                                            |                       
                                                                            |
                                                               Memory phase               Execution phase
                                                           val1 -> undefined|        num1 -> 10
                                                           val2 -> undefined|        num1 -> 5
                                                           totla -> undefined        total -> 15/retuen GEC
                                                                               // GEC hone k bad delete ho jaiga
let val1 = 10
let val2 = 2
function addNum(num1, num2) {
    let total = num1 + num2
    return total 
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)
*/

// ======      Call Stack

function one() {
   console.log("one") 
   two()
}
function two() {
   console.log("two") 
   three()
}
function three(){
   console.log("three") 
}
one()
two()
three()