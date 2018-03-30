/**
 * 
 * @param {array} arr 
 * @param {number} i 
 * @param {number} j 
 */
module.exports = function swap(arr = [], i, j) {
    if (arr.length && i >= 0 && j >= 0) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}