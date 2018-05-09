const swap = require('./swap');

function max_heapify(arr = [], start, end) {
    let parent = start,
        child = parent * 2 + 1;
    while (child < end) {
        if (child + 1 < end && arr[child] < arr[child + 1]) {
            child++;
        }
        if(arr[parent] > arr[child]) {
            return;
        }
        else {
            swap(arr, parent, child);
            parent = child;
            child = parent * 2 + 1;
        }
    }
    // if (child >= end) {
    //     return;
    // }
    // if (child + 1 < end && arr[child] < arr[child + 1]) {
    //     child++;
    // }
    // if (arr[parent] <= arr[child]) {
    //     swap(arr, parent, child);
    //     max_heapify(arr, child, end);
    // }
}

/**
 * 堆排序
 * @param {array} arr 
 * @param {function} compare 
 */
module.exports = function HeapSort(arr = []) {
    let len = arr.length, i;
    for (i = Math.floor(len / 2) - 1; i >= 0; i--) {
        max_heapify(arr, i, len);
    }
    for (i = len - 1; i > 0; i--) {
        swap(arr, 0, i);
        max_heapify(arr, 0, i);
    }
    return arr;
}