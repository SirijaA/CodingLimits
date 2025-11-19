let num = 153
let temp1 = num
let count = 0

while (temp1>0) {
    count ++
    temp1 = Math.floor(temp1/10)
}

let temp2 = num
let sum = 0
while (temp2>0) {
    let rem = Math.floor(temp2%10)

    let pow = count
    let x = rem ** pow
    sum += x
    temp2 = Math.floor(temp2/10)
}
if (num === sum) {
    console.log('Armstrong')
} else {
    console.log('Not Armstrong')
}