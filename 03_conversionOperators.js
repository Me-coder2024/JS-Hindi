let score = "33"
console.log(typeof score) // string
let valueInNumber = Number(score) 
//This Helps To covert string to number
console.log(typeof valueInNumber) // number
console.log(valueInNumber) // 33
// "33" ==> 33
// "33abc" ==> NaN
// true ==> 1 ; false ==> 0
// null ==> 0
let isLoggedIn = 1 
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) // true
// "krishna" ==> true
// "" ==> false
// 0 ==> false ; 1 ==> true
let somenumber = 1
let stringNumber = String(somenumber)
console.log(stringNumber) // "1"
console.log(typeof stringNumber) // string
// *****************************Operators*****************************//
let value = 3
let negValue = -value
//console.log(negValue) // -3

/*console.log(3+3) // 6
console.log(3-3) // 0
console.log(3*3) // 9
console.log(3/3) // 1
console.log(3**3) // 27
console.log(3%3) // 0*/

let str1 ="hello"
let str2 ="world"
let str3 = str1 + str2;
console.log(str3) // helloworld
console.log("1" + 1) // 11
console.log("1" + "1") // 11
console.log("1"+2+2)//122
console.log(2+2+"1")//41
console.log((3+3)*3 % 3) // 0

console.log(+true);
console.log(+"");

let num1, num2 ,num3 ;
num1= num2 = num3 = 3+1

let gameCounter = 100
gameCounter++;
console.log(gameCounter) // 101
