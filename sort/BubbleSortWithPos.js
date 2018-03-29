/**
 * 改进冒泡排序（带最后一次交换的位置）
 * @version 1.0 2018/03/29
 * @param {array} arr 
 * @param {function} compare
 */
module.exports = function BubbleSortWithPos (arr = [], compare = function (a, b) { return a > b; }) {
    let length = arr.length,
        i = length - 1;
    while (i > 0) {
        let pos = 0;
        for (let j = 0; j < i; j++) {
            if (compare(arr[j], arr[j + 1])) {
                pos = j;
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        i = pos;
    }
    return arr;
}