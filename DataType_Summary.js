//Data Kese Store kiye gya hai , kaha store kiya uski based par Divided hai 
// Primitive Data Types[Call By Value]
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt

//javascript is a dynamically typed language
//why?
//1. No need to specify the data type of the variable
//2. The data type of the variable can be changed at runtime
//3. The data type of the variable is determined by the value assigned to it

// Symbol Declartion 
const id= Symbol('123');
const anotherId= Symbol('123');
console.log(id===anotherId);//false
console.log(id);//Symbol(123)

// BigInt
const bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber);

// Reference Data Types[Call By Reference]
// 1. Object Literals
// 2. Arrays
// 3. Functions
// 4. Dates
// 5. Anything Else

//Arrays 
const heros = ['superman','batman','wonderwoman'];
console.log(heros);


//Object Literals

let myobj = {
    name:"krisna",
    age : 25,

}

//functions
const sayHello = function(){
    console.log("Hello");
}


// typeof : operator that returns the data type of the operand
console.log(typeof bigNumber);//bigint

//The Typeof operator returns the data type of the operand
// TYPE OF VAL : RESULT
// Undefined : "undefined"
// Null : "object"
// Boolean : "boolean"
// Number : "number"
// BigInt : "bigint"
// String : "string"
// Symbol : "symbol"
// Function : "function"
// Object : "object"
// Array : "object"
// Date : "object"
// Anything Else : "undefined"

// Note: Non-primitive return object for typeof operator
