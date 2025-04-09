
function chunk(arr, size) {
     let mainArr = []
      let tempArr = []
      arr.map((e,i )=>{
        tempArr.push(e)
        if(tempArr.length == size || (arr.length - 1 ) == i){
          mainArr.push(tempArr)
          tempArr = []
        }
      })
      return mainArr
};
