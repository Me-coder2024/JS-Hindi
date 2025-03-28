// Arrow Functions 

const user = {
     username : "krish",
     price: 999,


     welcomeMessage: function(){
        console.log(`Welcome ${this.username} to our store`);
        

     }
}
//user.welcomeMessage()
//user.username ="sam"
//user.welcomeMessage()

/*console.log(this)

function chai(){
   let username = "krish"
   console.log(this.username)
}
chai()*/

/*const chai = () => {
   let username = "krish"
   console.log(this.username)
}

chai()*/

//Note : Read Arrow functions document to get better understanding

//Explicit Return
const addTwo= (num1,num2) =>{
     return num1+num2
}

console.log(addTwo(3,4))

//Implicit Return

const addTwo2= (num1,num2) =>  (num1+num2)
//This method is used more and more in react 

console.log(addTwo2(3,4))

// To use Object in implicit return
const addObject = (num1,num2) => ({username:"krish"})



