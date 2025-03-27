//******************************************** String ********************************************

// We Can donate String '' or "" or ``

const name='Krishna';
const repoCount= 50

console.log(name + repoCount + " Value"); // Krishna50 Value
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // Hello my name is Krishna and my repo count is 50

const gameName = new String('krishna')


//string feature and methods
console.log(gameName[0]);//k
console.log(gameName.__proto__);//Use to check the prototype of the object
console.log(gameName.length);// Use to check the length of the string
console.log(gameName.toUpperCase()); // Use to convert the string to uppercase
console.log(gameName.toLowerCase()); // Use to convert the string to lowercase
console.log(gameName.bold()); // Use to bold the string
console.log(gameName.charAt(2)); // Use to get the character at the given index
console.log(gameName.indexOf('r'));// Use to get the index of the given character
const newString = gameName.substring(0,3); // Use to get the substring of the string
console.log(newString);
const newStringOne ="     krish       ";
console.log(newStringOne);
console.log(newStringOne.trim()); // Use to remove the white spaces from the string
const url='https://www.google.com';
console.log(url.replace('https','http'));// Use to replace the string
console.log(url.includes('https'));// Use to check the string is present or not
console.log(gameName.split(''));// Use to split the string
// split : speration , limit








//Note : In this Original string is not changed