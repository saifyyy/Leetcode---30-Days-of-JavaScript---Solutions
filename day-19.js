
function promiseAll(functions){
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;

    functions.forEach((fn, i) => {
      fn()
        .then((res) => {
          results[i] = res;
          completed++;
          if (completed === functions.length) {
            resolve(results);
          }
        })
        .catch((err) => reject(err)); // First reject ends it all
    });
  });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */