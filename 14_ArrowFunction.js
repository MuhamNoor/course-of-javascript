const user = {
    username: "noor",
    price: 533,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website `);
        console.log(this);
        
        
    }
}
user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()

console.log(this);


function hello() {
     const name = "mike"
    console.log(this.name);  
}
hello()




const func = () => {
    const username = "jon"
    console.log(this.username);
}
func()



// ===============       PURE BACIS ARROW FUNCTION  // EXPLECED  =====================

const add = (num1, num2) =>{
return num1 + num2
}
console.log(add(3, 2));

// =======    called IMPLECED RETURN  ==================


const anotheradd = (num1, num2) => ( num1 + num2 )
console.log(add(3, 2));


//===============    object impleced    =============
 const addObject = (num1, num2) => ({username: "noor"})
 console.log(addObject());
 