//To define object they are two method 
//1. Object literal
//2. Object constructor


//Object literal
// singleton object : object with only one instance
// in literal the singleton object is not created but in constructor it is created

const mySum = Symbol("Key1");
const Jsuser ={
    name: 'Krish',
    "full name" : "Krish Kumar Gupta",//This can't be acess from dot feature
    age: 25,
    location: "Mughalsarai",
    email: "me.coder.in@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"],
    mySum : "myKey1",
    [mySum] : "myKey1",// this way to define the symbol 
    
}

console.log(Jsuser.age);
console.log(Jsuser["age"]);
console.log(Jsuser["full name"]);
console.log(Jsuser.mySum);
console.log(typeof Jsuser.mySum)
console.log(typeof Jsuser[mySum]);

//to change value 
Jsuser.age = 26;

//to lock the value 
//Object.freeze(Jsuser);

Jsuser.greeting= function(){
    console.log("Hello");
}
console.log(Jsuser.greeting());

Jsuser.greetingTwo= function(){
    console.log(`hello,${this.name}`);
}
console.log(Jsuser.greetingTwo());

//Note: Try use bracket than dot as it is more flexible

const tinderUser2 = new Object(); //singleton object
const tinderUser = {} ;//non-singleton object

tinderUser.id="123abc";
tinderUser.name="Krish";
tinderUser.isLoggedIn =false;

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname :{
        userfullname :{
          fristname: "Krish",
          lastname: "Gupta"
      }
    }

}
console.log(regularUser.fullname.userfullname.fristname);

const obj1 = {
    1: "a", 2: "b"
}
const obj2 ={3:"a",4:"b"}
const obj4 ={5:"a",6:"b"}
//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2,obj4);
const obj3 = {...obj1,...obj2,...obj4};
console.log(obj3);


const users =[
    {
        id:1,
        name:"Krish"
    },
    {
        id:2,
        name:"Krish"
    }
]

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("name"));

//What is keys,values,entries in object ?
//Keys are the property names of an object
//Values are the values of an object
//Entries are the key value pairs of an object


const course ={
    coursename:"Js In Hindi",
    price :"999",
    courseInstructor: "hitesh",
}

//course.courseInstructor

//Object De-structure !!
//How to de-sturcture
//genral form
//const {key1,key2,key3} = objectName

const {courseInstructor : instructor} = course
console.log(courseInstructor);

//{} is symbol to recongination of de-structure

//API
//API stands for Application Programming Interface
//API is a set of rules that define how one application can talk to another application

/*{
    "name":"krish"
    "coursename":"Js in hindi"
    "price" :"free"
}*/
// API DATA FORMAT FROM BACKEND 


//SOMETIME WE GET API DATA IN FORM OF ARRAY 

/*[
    {value1},
    {''},
    {''},
    {''}
]*/

// General Website for API is RANDOM USER GENERATOR
//https://randomuser.me/api/?results=10&seed=1234&name=prefix

//To understand the data of API we can use JSON FORMATTER 
