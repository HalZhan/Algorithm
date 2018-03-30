/**
 * QuickSort
 * @param {array} arr 
 * @param {function} compare 
 */
module.exports = function QuickSort(arr = [], compare = function (a, b) { return a > b; }) {
    let length = arr.length;
    if (length <= 1) {
        return arr.slice(0);
    }
    let left = [], right = [], mid = [arr[0]];
    for (let i = 1; i < length; i++) {
        if (compare(arr[i], mid[0])) {
            right.push(arr[i]);
        }
        else {
            left.push(arr[i]);
        }
    }
    return QuickSort(left).concat(mid.concat(QuickSort(right)));
}