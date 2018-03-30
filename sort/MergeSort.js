const merge = function (left = [], right = [], compare = function (a, b) { return a > b; }) {
    let final = [];
    while (left.length && right.length) {
        final.push(compare(left[0], right[0]) ? right.shift() : left.shift());
    }
    return final.concat(left.concat(right));
}
/**
 * Merge Sort
 * @author halzhan
 * @version 1.0 2018/03/30
 */
const MergeSort = function (arr = [], compare = function (a, b) { return a > b; }) {
    let len = arr.length;
    if (len < 2) {
        return arr;
    }
    let mid = Math.floor(len / 2),
        left = arr.slice(0, mid),
        right = arr.slice(mid);
    return merge(MergeSort(left, compare), MergeSort(right, compare), compare);
};

module.exports = MergeSort;