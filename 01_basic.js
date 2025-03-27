const accountId = 12345 // this can't be changed because it is a constant
let accountEmail = "me.coder.in@gmail.com" 
var accountPassword = "12345"
accountCity ="Varanasi" 
//this manner should be not used because it is not declared with let, const or var
let accountState;
/*
Prefer using let and const over var
because of block scoping and function scoping
WHATS THE DIFFERENCE BETWEEN LET, CONST AND VAR?
- var is function scoped
- let and const are block scoped
what is block scope?
- block scope is the scope of the code block
- a block is a code between {}
what is function scope?
- function scope is the scope of the function
example of function scope
function myFunction(){
  var a = 10
  console.log(a)
}
*/
//accountId = 67890
accountEmail = "hc@hc.com"
accountPassword = "67890"
accountCity = "Delhi"
console.log(accountId);
console.table({accountEmail, accountPassword, accountCity,accountState});