

function compose(functions) {
    let res = 0
    return function(x) {
    let val = x

        functions.reverse().map((item)=>{
            val = item(val)
            res += val
        })
        return val
    }

};

/**
 * const fn =  ([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */