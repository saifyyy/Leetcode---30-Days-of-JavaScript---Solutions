
function join(arr1, arr2){
    let retArr = [];
    [...arr1,...arr2].forEach(e => {
      let existingIndex = retArr.findIndex(i => i.id === e.id);
    if (existingIndex !== -1) {
  
      retArr[existingIndex] = { ...retArr[existingIndex], ...e };
    } else {
      retArr.push(e);
    }
    })
    return  retArr.sort((a,b) => a.id - b.id)
};