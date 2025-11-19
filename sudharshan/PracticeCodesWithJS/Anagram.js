let s1 = "mary"
let s2 = "army"

 if (s1.length === s2.length) {
   let s1c = []
   let s2c = []

      for (let i = 0; i < s1.length; i++) {
         s1c.push(s1.charAt(i))
         s2c.push(s2.charAt(i))  
      }  
      s1c.sort()
      s2c.sort()

   if ((s1c.every((value, index)=> value === s2c[index]))) {
         console.log('anagram')
      } else {
         console.log('not anagram')  
      } 
  } else {
    console.log('anagram is not possible ')
  }