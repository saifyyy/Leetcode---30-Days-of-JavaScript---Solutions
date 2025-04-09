

function createCounter(init) {
    let val = init;
    const inval = init ;
    return {
    increment: () =>{
         val++
         return val
         },
    decrement: () => {
        val--
        return val
        },
    reset: () => {
        val = inval
        return val
    },
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */