
async function addTwoPromises(promise1, promise2) {
   return new Promise(async resolve => {
        resolve(await promise1 + await promise2)
        
    })
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */