let list = [1,2,2,3,4,5,1];

let seen = new Set();
let duplicates = new Set();


for (const num of list) {
    if(seen.has(num)){
      duplicates.add(num)
    }
    else{
        seen.add(num)
    }
}
console.log("Duplicate Elements: "+ [...duplicates].join(" "))
console.log("Removed Duplicates: "+[...seen].join(" "))
