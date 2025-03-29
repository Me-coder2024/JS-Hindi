const myNums = [1,2,3]

/*const total = myNums.reduce(function ( acc , current){
    console.log(`acc : ${acc} and current value : ${current}`)
    return acc + current
}, 0)

console.log(total);*/ // using function in reduce 

/*const total = myNums.reduce( ( acc , current) =>{
    console.log(`acc : ${acc} and current value : ${current}`)
    return acc + current
}, 0)

console.log(total);//explicit with arrow functions in reduce */
const total = myNums.reduce( ( acc , current) => acc+current ,0 )
console.log(total);//explicit with arrow functions in reduce 

const shoppingCart = [
    {
        itemName : "js Course",
        price : 999
    },
    {
        itemName : "python Course",
        price : 99
    },
    {
        itemName : "app dev Course",
        price : 12999
    },
    {
        itemName : "DS Course",
        price : 9999
    },
]
const priceToPay =shoppingCart.reduce((acc,item) => acc+item.price,0)

console.log(priceToPay);