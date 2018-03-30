const BubbleSort = require('./BubbleSort');
const BubbleSortWithPos = require('./BubbleSortWithPos');
const InsertSort = require('./InsertSort');
const MergeSort = require('./MergeSort');
const SelectSort = require('./SelectSort');
const ShellSort = require('./ShellSort');
const QuickSort = require('./QuickSort');

const randNumbers = function (opt = {}) {
    let lower = opt.lower || 0;
    let upper = opt.upper || 10;
    let size = opt.size || 10;
    let nums = [];
    for (let i = 0; i < size; i++) {
        let num = Math.random() * (upper - lower) + lower;
        num = parseInt(num, 10);
        nums.push(num);
    }
    return nums;
};

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

doSort(QuickSort);