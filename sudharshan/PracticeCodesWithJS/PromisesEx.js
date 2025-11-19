let myPromise = new Promise((resolve, reject)=>{
    let success = false
    if (success) {
        resolve('Task Completed')
    } else {
        reject('Task Failed')
    }
})

myPromise.then((msg)=>{console.log('Success: '+msg)})
         .catch((error)=>{console.log('Failed: '+error)})
         .finally(()=>{console.log('Done')})