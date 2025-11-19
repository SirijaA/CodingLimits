function Step1(callback){
    setTimeout(function(){
        console.log("step1!")
        callback();
    },1000)
}

function Step2(callback){
    setTimeout(function(){
        console.log("step2!")
        callback();
    }, 1000)
}

Step1(function(){
        Step2(function(){
        console.log("Done!")
        })
     }
)