//Functions


function sayMyName(){
   console.log("K");
   console.log("I");
   console.log("R");
   console.log("S");
   console.log("H");

}

//sayMyName()

function TwoSum(){
    const a =2 
    const b=3 
    console.log(a+b)
}

/*function addTwoNumber(number1,number2){
    console.log(number1+number2)
}*/



function addTwoNumber(number1,number2){
    let result = number1+number2
    return result
}
const result = addTwoNumber(2,3)
// Where number1,number2 is called parameter 
// 2,3 is called argument

 
console.log("Result : ",result);

function loginUserMessage(username){
    if(username === undefined){
       console.log("Please enter a username");
       return
    }
    return`${username} just logged in`
}

console.log(loginUserMessage("krish"))
// If any parameter is not passed so it return undefined 


//... rest oprerator 
//what is rest opreator ?
// rest operator is used to pass multiple arguments to a function
function calculateCartPrice(val1, val2, ...num1){
        return num1
}

console.log(calculateCartPrice(200,300,400,3000))

// Object with functions 
const user ={
    username :"krish",
    price :199
}

function handObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

handObject(user) 

// Array with functions 
const myNewArray =[ 200, 3000, 400]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))

// spread operator
// spread operator is used to pass multiple values to a function
// spread operator symbol is ...


