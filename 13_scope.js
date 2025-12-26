let a = 20      // (1) Global Scope

if(true) {
        let a = 4343 //(2) Block Scope (inside if block)
}
console.log(a);

function one(){
    const username = ("noor")
    function two(){
        const instructor = ("hitesh")
        console.log(username); 
    }
    // console.log(instructor);
    two()
}
one()




if (true) {
    let username = "noor"
    if (username === "noor") {
        let instructor = " hitesh"
        console.log(username + instructor);
        
    }
}

console.log(addone(5))
function addone(num) {
    return num + 1
}
    const addtwo = function(num) {
        return num + 4 
    }
    addtwo(4)