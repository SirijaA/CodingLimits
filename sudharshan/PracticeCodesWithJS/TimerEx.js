let timer = new Date();
setInterval(()=>{
  let date = new Date()  
  timer = date.toLocaleString('en')
}, 1000)
console.log(timer)