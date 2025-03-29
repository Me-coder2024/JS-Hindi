// for of
// array specfic loop

// loop on numbers array 
const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num)
}

// loop on string array
const greetings = "Hello world!"
for (const greet of greetings){
    console.log(`Each Char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', 'India')
map.set('US', 'United States')
map.set('UK', 'United Kingdom')
map.set('IN','India')
//takes only uniques values or key 
console.log(map)

for(const key of map){
    console.log(key);
}

//get different value in map 

for(const [key,value] of map){
    console.log(key,':-',value);
}

// object with for of 
// to iterable object we have use differnt way not like map
const myObject ={
    game1:'NFS',
    game2:'Spiderman'
}

for (const key in myObject ){
    console.log(key,':-',myObject[key])
}

//for in

// for in loop is used to loop on object

const programming = ["js","py","cpp","c","rb","java"]

for (const key in programming){
    console.log(programming[key])
    console.log(key)
}

//Note : Map is not iterable 

const coding = ["js","py","java","c++","c","ruby"]

// callback hai to isliye name functions ka provide nahi karna hoga
coding.forEach( function (val){
  console.log(val)
})

coding.forEach( (val)=>{
    console.log(val)
})

function printMe(item){
    console.log(item)
}

coding.forEach(printMe)

const myCoding = [
    {
        languageName : "javascript",
        languagefilename : "js"
    },
    {
        languageName : "python",
        languagefilename : "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})

const value=coding.forEach((item)=>{
    //console.log(item);
    return item 
})

console.log(value);//undefined
// As for each does not return value  



