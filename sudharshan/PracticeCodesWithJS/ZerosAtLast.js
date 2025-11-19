let list = [1,0,2,0,3]
let index = 0

for (let i = 0; i < list.length; i++) {
   if (list[i] !== 0) {
     list[index++] = list[i]
   }   
}
while (index < list.length) {
    list[index++] = 0
}
console.log(list)