function map(arr, fn) {
    return arr?.map((item,i)=>{
        return fn(item,i)
    })
};