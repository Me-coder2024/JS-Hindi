// Dates starts from jan 1, 1970

let myDate = new Date();
console.log(myDate.toString());//Wed Sep 29 2021 12:00:00 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());//Wed Sep 29 2021
console.log(myDate.toLocaleString());//9/29/2021, 12:00:00 PM
console.log(typeof myDate);//object


let myCreateDate = new Date(2023 , 0, 23);
console.log(myCreateDate.toString());//Mon Jan 23 2023 00:00:00 GMT+0530 (India Standard Time)
//Note: Month starts from 0 to 11
// note: Date starts from 1 to 31
// note: Year starts from 1900
// note: Hours starts from 0 to 23
//format : new Date(year, month, date, hours, minutes, seconds, milliseconds)
let myCreateDateone = new Date("2025-01-25");
console.log(myCreateDateone.toString());//Sat Jan 25 2025 05:30:00 GMT+0530 (India Standard Time)
//Indian Format 
let myCreateDateTwo = new Date("01-25-2025");
console.log(myCreateDateTwo.toLocaleString());//1/25/2025, 12:00:00 AM

let myTimeStamp = Date.now();
console.log(myTimeStamp);//1632890400000
console.log(myCreateDate.getTime());//1632890400000
console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate.getFullYear());//2021
console.log(newDate.getMonth()+1);//8
console.log(newDate.getDate());//29

`${newDate.getDate()}/${newDate.getMonth()+1}/${newDate.getFullYear()}`
//29/9/2021

newDate.toLocaleString('default',{
    month:'long',
    weekday:'long',
    day:'numeric'
})