let list = [1,2,3,4,5,6,7,8,9,10]
let even = []
let odd = []

for (let i = 0; i < list.length; i++) {
     if (list[i]%2===0) {
       even.push(list[i])
     } else {
       odd.push(list[i])
     }
}

console.log([...even, ...odd])
