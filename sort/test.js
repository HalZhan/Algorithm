const randNumbers = require('../utils/randNumbers');
const BubbleSort = require('./BubbleSort');
const BubbleSortWithPos = require('./BubbleSortWithPos');
const InsertSort = require('./InsertSort');
const MergeSort = require('./MergeSort');
const SelectSort = require('./SelectSort');
const ShellSort = require('./ShellSort');
const QuickSort = require('./QuickSort');
const HeapSort = require('./HeapSort');
const CountingSort = require('./CountingSort');
const RadixSort = require('./RadixSort');

const doSort = function (sort, nums) {
    nums = nums || randNumbers({
        lower: 0, upper: 10000, size: 20
    });
    console.log('Raw Numbers: ', nums);
    let startTime = +new Date(),
    result = sort(nums, function(a, b) {
        return a > b;
    });
    let endTime = +new Date();
    console.info(`After ${sort.name}: `, result);
    console.info(`${sort.name} used `, (endTime - startTime), 'ms');

}

doSort(RadixSort);