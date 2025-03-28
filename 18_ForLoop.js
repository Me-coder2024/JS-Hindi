// for loop

/*for (let i = 0 ; i <= 10; i++) {
  const element = i;
  if(element == 5){
    console.log("5 is best number");
  }
  console.log(element);

}*/

/*for(let i=0; i<=10;i++){
    console.log("outter loop :",i)
    for(let j=0;j<=10;j++){
        //console.log("inner loop :",j)
        console.log(i+'*'+j+'='+i*j)
    }

}*/

let myArray = ["flash","batman","superman"]
for (let i = 0; i < myArray.length; i++) {
        console.log(myArray[i])
}

// break and continue 

for (let i = 0; i <= 10; i++) {
    if(i == 5){
        console.log("5 is deteceted")
        break;
    }
   console.log(`value of i is ${i}`);
}

for (let i = 0; i <= 10; i++) {
    if(i == 5){
        console.log("5 is deteceted")
        continue;
    }
   console.log(`value of i is ${i}`);
}

