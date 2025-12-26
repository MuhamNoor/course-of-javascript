//  For of loop

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}


const greeting = 'hello'
for (const greet of greeting) {
    console.log(greeting);
}

//      MAP

const map = new Map()
map.set('pk', 'Pakistan')
map.set('USA', 'United STate OF America')
map.set('UAE', 'Dubai')
//console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-' , value);
}


// Object For In Loop

const myobject = {
    js: 'javascript',
    Cpp: 'C++',
    py: 'python',
}
for (const key in myobject) {
  console.log(`${key} stand for ${myobject[key]}`);
}

//      Execute ForIn Loop Arry

const programming = ['python', 'javascript', 'java', 'Cpp']
for (const key in programming) {
console.log(programming[key]);
}

// Loop Foreach array call object

const mycod = [
    {
        languagename: "java",
        languagefile:   'ja',
    },
    {
        languagename: "javaScript",
        languagefile:   'js',
    },
    {
        languagename: "python",
        languagefile:   'py',
    },   
] 
mycod.forEach((val) => {
console.log(val.languagename);
})
//java
//javaScript
//python 