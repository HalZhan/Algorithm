/**
 * select sort
 * @author halzhan
 * @version 1.0 2016/12/26
 */
const SelectSort = function (nums = [], compare = function (a, b) { return a > b; }) {
    if (nums && nums.length) {
        for (let i = 0; i < nums.length; i++) {
            let keyIdx = i;
            for (let j = i + 1; j < nums.length; j++) {
                if (compare(nums[keyIdx], nums[j])) {
                    keyIdx = j;
                }
            }
            let tmpNum = nums[keyIdx];
            nums[keyIdx] = nums[i];
            nums[i] = tmpNum;
        }

    }
}

module.exports = SelectSort;