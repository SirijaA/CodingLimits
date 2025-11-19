console.log("1 to 10 printing recursive version")
function OneToN(a){
    if(a === 10){
       process.stdout.write(a+" ") 
    }
    else{
       process.stdout.write(a+" ")
       OneToN(a+1);
    }
}
OneToN(1)

console.log()
console.log()
console.log("sum of natural numbers recursive version")

function SumOfN(a){
    if(a === 1){
        return 1
    }
    else{
        return a + SumOfN(a-1)
    }
}

let sumRes = SumOfN(10)
console.log(sumRes)

console.log()
console.log("factorial recursive version")
function fact(a){
  if (a===0) {
    return 1
  } else {
    return a * fact(a-1)
  }
}
let factRes = fact(5)
console.log(factRes)

console.log()
console.log("Power recursive version")
function pow(b, p){
    if(p===0){
        return 1
    }
    else{
        return b*pow(b, p-1)
    }
}
let powRes = pow(2,3)
console.log(powRes)

console.log()
console.log("Factors recursive version")
