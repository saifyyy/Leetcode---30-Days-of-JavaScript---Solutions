

Array.prototype.groupBy = function(fn) {
    let retObj = {};  
    this.forEach(e => {
        let res = fn(e);

        if (retObj[res]) {
            retObj[res].push(e);
        } else {
            retObj[res] = [e];
        }
    });

    return retObj;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */