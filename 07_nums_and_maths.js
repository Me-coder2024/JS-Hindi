//*****************************************Numbers and Maths*****************************************

const score = 100;


const balance = new Number(100);//new Number() is a constructor function
// constructor function is a function that is used to create an object
console.log(balance);


console.log(balance.toString().length);//3
console.log(balance.toFixed(2));//100.00

const otherNumber = 23.43435;
console.log(otherNumber.toFixed(2));//23.43
console.log(otherNumber.toPrecision(3));//23.4
//toPrecision() method returns a string representing the Number object to the specified precision.
//precision : The number of significant digits.

const hunderds = 10000000;
console.log(hunderds.toLocaleString());//10,000,000
console.log(hunderds.toLocaleString('en-IN'));//1,00,00,000



// ++++++++++++++++++++++++++++++ Math +++++++++++++++++++++++++++++++++++++

console.log(Math.PI);//3.141592653589793
console.log(Math.abs(-100));//100
console.log(Math.round(2.4));//2
console.log(Math.ceil(2.4));//3
console.log(Math.floor(2.4));//2
console.log(Math.pow(2,3));//8
console.log(Math.sqrt(16));//4
console.log(Math.min(1,2,3,4,5));//1

console.log(Math.random());//0.123456789
//Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):
console.log((Math.random()*10)+1);//1 to 10


//Random number between 10 to 20
//formula : Math.random()*(max - min +1) +min
//Math.random()*(20 - 10 +1) +10
const min =10 
const max = 20

console.log(Math.random()*(max - min +1) +min);//10 to 20

