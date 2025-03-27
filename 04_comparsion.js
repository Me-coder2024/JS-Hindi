console.log(2>1);//true
console.log (2<=1);//   false

console.log (2>=1);//true
console.log (2==1);//false
console.log (2!=1);//true

console.log("2">1);//true
console.log("02">1);//true
console.log("2">"1");//true
console.log("2">"1a");//true

//Avoid This Type of Comparison
/*case of null comaprsion */

console.log(null >0);
console.log(null ==0);
console.log(null >=0);
/*case of undefined comaprsion */
console.log(undefined >0);
console.log(undefined ==0);
console.log(undefined >=0);

// Use === instead of ==
// ===
console.log(2==="2");//false
