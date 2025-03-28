//const userEmail = "k@krish.ai"
const userEmail = []
//const userEmail = ""
if (userEmail){
    console.log("Email is valid")
}else{
    console.log("Email is invalid")
}

// falsy values 

//false,0,-0,BigInt,0n,"",null,undefined,NaN

//truthy values

//true,1,2,3,4,5,"hello",[],{},function () 


//How to check array in if/else
if(userEmail.length === 0){
    console.log("Array Is empty");
}

//How to check object in if/else 

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object Is Empty");
}


//To rember :
//false == 0
// true
// false == ""
// true
// 0 == ''
// true

// Nullish coalescing Operator (??) : null undefined 

let val1;
//val1 =5 ?? 10 
//val1 = null ?? 10 
val1 = null ?? 10 ?? 20

console.log(val1) // 10


// Terniary Operator

//condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")