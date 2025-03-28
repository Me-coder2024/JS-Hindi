//Scopes 

//What is Scope in js 
//Scope is the region of the code where a variable is defined. It determines the accessibility of variables
//Scope is used to prevent variable naming conflicts and to improve code readability.

//There are two type of scope :
// Global and local scope 
// Global scope: variables and functions defined outside of any function are in the global scope
// Local scope: variables and functions defined inside a function are in the local s

//var c = 300

let a = 300
if(true){
    let a =10
    const b = 20
    console.log("This Inner Value :",a)
}

console.log(a); //300
//console.log(b); // Uncaught ReferenceError: b is not defined
//console.log(c);

function one(){
    const username = "krish"
    function two(){
        const website = "github"
        console.log(username);

    }
    // console.log(website)

    two()
}
// child element can acesss the data of parent element 
one()

if(true){
    const username= "krish"
    if (username === "krish"){
        const website = "github"
        console.log(username + website)

    }
    //console.log(website); 1st error can't take value from another scope

}

//console.log(website); 2nd error can't take value from another scope

//++++++++++++++++++++++++++interesting +++++++++++++++++++++++++++++++++++++++++++

function addone(value){
    return value+1;

}

addone(5)

//Another way to define functions
const addTwo = function(value){
    return value+2;
}

addTwo(5)