let num = 12
let first = num
let sqFirst = first * first

let revFirst = 0
while (first>0) {
    let rem = Math.floor(first%10)
    revFirst = revFirst*10 + rem
    first = Math.floor(first/10)
}
let second = revFirst * revFirst

let sqSec = 0
while (second>0) {
    let rem = Math.floor(second%10)
    sqSec = sqSec*10 + rem
    second = Math.floor(second/10)
}

if(sqFirst === sqSec){
    console.log('Adam Number')
}
else{
    console.log('Not Adam Number')
}

