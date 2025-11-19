function outer(){
    let variable = 'outerVariable'
    console.log('outer function is executed! '+variable)
    function inner(){
        console.log("inner function is executed! "+variable)
    }
    inner()
}
outer()