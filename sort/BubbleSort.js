/**
 * 冒泡排序
 * @version 1.0 2018/03/29
 * @param {array} arr 
 * @param {function} compare
 */
const BubbleSort = function (arr = [], compare = function (a, b) { return a > b; }) {
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (compare(arr[j], arr[j + 1])) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

module.exports = BubbleSort;