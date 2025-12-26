// Immediately Invoked FunctionExpression
// named IIFE
(function myDB() {
    console.log(`DB CONNECTED`);
})();


//SimpleIFFE


(() => {
    console.log(`Hello IIFE Here`);
})();


((name) => {
    console.log(`Hello IIFE Here ${name}`);
})('noor');




// =======                    DEFINATION

// An IIFE is a JavaScript function that is defined and executed immediately after it is created.
// globalscope k polution Se problem hote he kahi bar to us global scope
//  k variable jo b waha declarsion ko hatene k liye hmne IFFE k use kiya



