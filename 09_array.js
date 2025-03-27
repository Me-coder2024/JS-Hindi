// array

const myArray = [1, 2, 3, 4, 5];
//collecting several data in single variable


const myArr2 = new Array(1, 2, 3, 4, 5);
console.log(myArr2[2]);//3

//Array Methods

myArr2.push(6);//add the element at the end of the array
console.log(myArr2);//[1,2,3,4,5,6]

myArr2.pop();//remove the element from the end of the array

myArr2.unshift(9);//add the element at the start of the array
console.log(myArr2);//[9,1,2,3,4,5]
myArr2.shift();//remove the element from the start of the array
console.log(myArr2);//[1,2,3,4,5]

console.log(myArr2.includes(9));//false
//includes : check the element is present or not

console.log(myArr2.indexOf(3));//2
//indexOf : check the index of the element
console.log(myArr2.indexOf(19));//-1
// -1 : element is not present

const newArr = myArr2.join();
console.log(newArr);//1,2,3,4,5
//join : join the element with the comma
console.log(typeof newArr);//string


console.log("A",myArr2);//A [1,2,3,4,5]
const myn1 = myArr2.slice(1, 3);
console.log(myn1);//[2,3]
console.log("B",myArr2);//B [1,2,3,4,5]
const myn2 = myArr2.splice(1, 3);
console.log(myn2);//[2,3,4]
console.log("C",myArr2);//C [1,5]
//slice : slice the element from the array , Does not change the original array
//splice : remove the element from the array, change the original array

const marvelHeros = ['Ironman', 'Thor', 'Hulk'];
const dcHeros = ['Superman', 'Batman', 'Wonderwoman'];
marvelHeros.push(dcHeros);
console.log(marvelHeros);//["Ironman", "Thor", "Hulk", Array(3)]
const allheros=marvelHeros.concat(dcHeros);
console.log(allheros);//["Ironman", "Thor", "Hulk", "Superman", "Batman", "Wonderwoman"]
//concat : merge the two arrays

const all_new_heros = [...marvelHeros, ...dcHeros];
console.log(all_new_heros);//["Ironman", "Thor", "Hulk", "Superman", "Batman", "Wonderwoman"]
//spread operator : merge the two arrays


const another_array =[1,2,3,[4,5,6],7,8,[9,10]];
console.log(another_array.flat());//[1,2,3,4,5,6,7,8,9,10]
//flat : flat the array
const real_another_array= another_array.flat(Infinity);
console.log(real_another_array);//[1,2,3,4,5,6,7,8,9,10]



console.log(Array.isArray("Krishna"));//false
console.log(Array.from("Krishna"));//["K", "r", "i", "s", "h", "n", "a"]
console.log(Array.from({name:"Krishna"}));//[]


let score=100
let score2=200
let score3 =300

console.log(Array.of(score,score2,score3));//[100,200,300]
//Array.of : create the array from the given values

