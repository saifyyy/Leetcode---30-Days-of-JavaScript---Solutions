

function filter(arr,  fn) {
    let newarr = []
    arr?.map((item,i)=>{
        if(fn(item , i)){
            newarr.push(item)
        }
    })
    return newarr
};