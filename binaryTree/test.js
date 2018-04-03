const randNumbers = require('../utils/randNumbers');
const arrayToTree = require('./arrayToTree');

const doTest = function(numbers, func, ...args) {
    let treeNode = arrayToTree(numbers),
        result = treeNode;
    if(func && typeof func === 'function') {
        result = func.apply(undefined, args);
    }
    console.log('Result is ', result);
}

doTest(randNumbers());