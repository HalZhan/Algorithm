const swap = require('./swap');

function heapify(arr = [], start, end) {
    let parent = start,
        child = parent*2+1;
    if(child>=end) {
        return;
    }
    
}

/**
 * 堆排序
 * @param {array} arr 
 * @param {function} compare 
 */
module.exports = function HeapSort(arr = [], compare = function (a, b) { return a > b; }) {

}