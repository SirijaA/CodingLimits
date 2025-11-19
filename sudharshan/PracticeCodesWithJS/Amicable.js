let num1 = 220
let num2 = 284

let sum1 = 0
let sum2 = 0

for (let i = 1; i < num1; i++) {
   if (num1%i===0) {
    sum1 += i
   }    
}

for (let i = 1; i < num2; i++) {
   if (num2%i===0) {
    sum2 += i
   }    
}

if ((num1 === sum2)&&(num2 === sum1)) {
    console.log('Amicable Numbers')
} else {
    console.log("Not Amicable Numbers")
}