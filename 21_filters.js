const myNums = [1,2,3,4,5,6,7,8,9,10]
/*const newNums = myNums.filter( (num)=> num>4)//implicit 

//filter 
// require a condition
// filter returns the value 

console.log(newNums)*/

/*const newNums = myNums.filter((num) => {
    return num > 4
})//explicit

console.log(newNums)*/

//if we want to do same thing but usinf for each

const newNums = []

myNums.forEach((num)=>{
    if(num > 4){
        newNums.push(num)
    }
})
console.log(newNums)

// watch chai aur code lec-30 timespam : 13:00 - 18:00

const newnums = myNums.map((num)=> num +10)// it return the value
console.log(newnums)

// map is used to return the value

//chaining
const newnums1= myNums
                    .map((num)=> num *10)
                    .map((num) => num+1)
                    .filter((num) => num>= 40)
console.log(newnums1);
