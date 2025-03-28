// Immediately Invoked Function Experessions (IIFE)

// As global scope create pollution so, to remove pollution we use IIFE
(function chai(){
    console.log("DB CONNECTED")
})();

( (name)=>{
    console.log(`DB CONNECTED ${name}`)
})('krish')
