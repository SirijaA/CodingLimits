let limit = 10;

for(let i = 1; i<=limit; i++){
    for(let j = 1; j<=limit-i; j++){
        process.stdout.write(" ")
    }
    for(let j=1; j<=i; j++){
        process.stdout.write("* ")
    }
    console.log()
}
for(let i = limit; i>=1; i--){
    for(let j = 1; j<=limit-i; j++){
        process.stdout.write(" ")
    }
    for(let j=1; j<=i; j++){
        process.stdout.write("* ")
    }
    console.log()
}