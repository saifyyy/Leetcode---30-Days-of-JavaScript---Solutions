var call = 0
function createCounter(n)   {
    return function() {
        return n++
         
    }
}



 const counter = createCounter(10)
 counter() // 10
 counter() // 11
 counter() // 12
