// // literal tan tarha define krte he single tun nhe banta 
// // conteract ki tarha banega singletan banta he


// 1 object literals
// 2 singleton

let Sym = Symbol("key")

let obj = {
            name: "Noor",
            [Sym]: "key",  // Object me symball Ase add hota he
           "full name": "noor rafiq",
            email: "noor@123",
            age: 18,
            location: "karqachi",
            isLoggin: "false",
            lastLongin: ["monday", 'tuesday']
        }
      
        
        console.log(obj["email"]);
         console.log(obj["full name"]);
         console.log(obj[Sym]); //  Interview Question ,braket me add hote he symble

          obj.email = "noor@chat.com"
         // Object.freeze(obj)
          obj.email = "noor@fb.com"
          console.log(obj);

          obj.greeting = function(){
            console.log("hello js user");
          }
          console.log(obj.greeting());


           obj.greetingtwo = function(){
            console.log(`hiii ${this.name}`);  //string interpolationn
          }
          console.log(obj.greeting());
          console.log(obj.greetingtwo());


//           // 2 singleton


const Vpn = new Object()  //Singleton Object  INTERVIEW QUESTION
const userVpn = {}  //None Singleton Object

userVpn.id = "1234",
userVpn.name = "noor"
userVpn.email = "noor@123"
console.log(userVpn);



const user1 = {
    email: "noor@123",
    fullname: {
        userfullname: {
        firstname: "noor",
        lastname: "rafiq"
    }
}
}
console.log(user1.fullname);

//////////   MERGED OBJECTS    ////////


const obj1 = {1: "a", 2: "b" }
const obj2 = {3: "c", 4: "d" }
const obj3 = {5: "e", 6: "f" }
const obj4 = {7: "g", 8: "h" }
const obj5 = {9: "i", 10: "j" }

// const obj = Object.assign({}, obj1, obj2, obj3, obj4, obj5)  //      1 METHOD
const obj6 = {...obj1, ...obj2, ...obj3, ...obj4, ...obj5 } //           2 method is call spread



 console.log(obj6);


///////////   MOST USED METHOD  
  

const data = [
    { id: 1, pass: "noor123"},
    { id: 1, pass: "noor123"},
    { id: 1, pass: "noor123"},
    { id: 1, pass: "noor123"},  
]
     console.log(data[1].pass);

//   MOST USE METHOD


    console.log(userVpn);
    console.log(Object.keys(userVpn));
    console.log(Object.values(userVpn));
    console.log(Object.entries(userVpn));
    console.log(userVpn.hasOwnProperty('email'));



    const course = {
      coursename: "Javascript",
      price: "0000",
      courseInstructor: "indian"
    }
    const {courseInstructor: instrucctor} = course
    console.log(instrucctor);

    