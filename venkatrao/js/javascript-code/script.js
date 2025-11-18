/*let the=document.querySelector("#mode1");
let currMode="light";
let body=document.querySelector("body");
the.addEventListener("click",()=>{
  if(currMode==="light"){
    currMode="dark";
    body.classList.add("dark")
    body.classList.remove("light")
  }else{
    currMode="light";
    body.classList.add("light");
    body.classList.remove("dark")
  }
  console.log(currMode);
});*/

      ////CALLBACKS////
/*function wait(callback){
 console.log("wait");
 callback();
}
function realme(callback){
  console.log("realme");
  callback();
}
function high(){
  console.log("high");
}
function good(){
  setTimeout(()=>console.log("good"),3000);
}
wait(good);
realme(high);*/

/*function sum(callback,a,b){
  let result=a+b;
  callback(result);
console.log("sum");
}
sum((res)=>{console.log(res)},2,3);*/

           //////CALLBACK HELL//////
/*function getData(dataId,getNextData){
  setTimeout(()=>{
    console.log("data",dataId);
    if(getNextData){
      getNextData;
    }
  },2000);
}
  getData(1,()=>{
    console.log("getting data2");
      getData(2,()=>{
        console.log("getting data3");
        getData(3,()=>{
          console.log("getting data4")
          getData(4);
        });
     });
  });*/

             /////PROMISES/////
function cleanHand(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("you cleaned hands");
    },2000);
  });
}
function readyToEat(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("ready to eat");
    },2000);
 });
}
function cleanHandAfterEat(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("cleanHandfterEat");
    },2000);
  });
}
cleanHand().then(value=>{console.log(value);return readyToEat()})
           .then(value=>{console.log(value);return cleanHandAfterEat()})
           .then(value=>{console.log(value);console.log("you work is done")});
