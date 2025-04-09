
function sortBy(arr, fn) {
       return arr.sort((a, b) => Number(fn(a)) - Number(fn(b)));
};