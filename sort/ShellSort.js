/**
 * 获得最优步长
 * @param {number} length 
 * @return {number}
 */
function getStep(length) {
    if (length <= 2) {
        return length;
    }
    let mid = parseInt(length / 2, 10);
    if (mid % 2 === 0) {
        if ((mid - 1) === 2 || ((mid - 1) % 2 !== 0) && (mid - 1) !== 3) {
            return mid - 1;
        }
        else {
            return 2;
        }
    }
    else {
        return mid;
    }
}

/**
 * 希尔排序
 * @param {array} arr 
 * @param {function} compare 
 * @return {array}
 */
module.exports = function ShellSort(arr = [], compare = function (a, b) { return a > b }) {
    let len = arr.length,
        temp,
        i,j,
        gap = 1,
        step = getStep(len);
    console.log(step);
    if (step > 0) {
        // while (gap < len / step) {
        //     gap = gap * step + 1;
        // }
        gap = step;
        for (gap; gap > 0; gap = Math.floor(gap / step)) {
            for (i = gap; i < len; i++) {
                temp = arr[i];
                for (j = i - gap; j >= 0 && compare(arr[j], temp); j -= gap) {
                    arr[j + gap] = arr[i];
                }
                arr[j + gap] = temp;
            }
        }
    }
    return arr;
}