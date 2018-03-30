/**
 * 希尔排序
 * @param {array} arr 
 * @param {function} compare 
 * @return {array}
 */
module.exports = function ShellSort(arr = [], compare = function (a, b) { return a > b }) {
    let len = arr.length, temp, i, j;
    for (let gap = len >> 1; gap > 0; gap >>= 1) {
        for (i = gap; i < len; i++) {
            temp = arr[i];
            for (j = i - gap; j >= 0 && compare(arr[j], temp); j -= gap) {
                arr[j + gap] = arr[j];
            }
            arr[j + gap] = temp;
        }
    }
    return arr;
}