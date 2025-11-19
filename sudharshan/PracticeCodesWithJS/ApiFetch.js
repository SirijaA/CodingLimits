setTimeout(()=>{
         fetch('https://jsonplaceholder.typicode.com/albums/2')
            .then((response)=>response.json())
            .then((data)=>console.log(data))
            .catch((error)=>console.error(error))
            .finally(()=>console.log('timeOut done'))               
}, 2000)

let myPromise = new Promise((resolve, reject)=>{
    let response = fetch("https://jsonplaceholder.typicode.com/albums/2")
     if (response){
      resolve(response.then((res)=>res.json()))
     }
     else{
      reject("error")
     }
  })

  myPromise.then((data)=>console.log(data)) 
           .catch((error)=>console.log(error))
           .finally(()=>console.log('promise done'))

const getAlbum = async()=>{
    try {
       const response = await fetch("https://jsonplaceholder.typicode.com/albums/2")
       const data = await response.json()
       console.log(data)
    } catch (error) {
       console.log(error) 
    }
    finally{
      console.log('async/await done')
    }
}
getAlbum()