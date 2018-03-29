/**
 * insert sort
 * @author halzhan
 * @version 1.0 2016/12/26
 */
const InsertSort = function (nums = [], compare = function (a,b) { return a > b; }) {
    for (let j = 1; j < nums.length; j++) {
        let key = nums[j],
            i = j - 1;
        while (i >= 0 && compare(nums[i], key)) {
            nums[i + 1] = nums[i];
            i--;
        }
        nums[i + 1] = key;
    }
}

module.exports = InsertSort;