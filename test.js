/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {
    if (obj === null || obj === undefined || !(classFunction instanceof Function))
        return false;
    console.log(obj);  
    console.log(Object(1));
    return Object(obj) instanceof classFunction;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */

console.log(checkIfInstanceOf(new Date(), Date)); // true