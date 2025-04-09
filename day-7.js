
function reduce(nums, fn, init) {
    let val = init
    nums?.map((item,i)=>{
        val = fn(val,item)
    })
    return val
};