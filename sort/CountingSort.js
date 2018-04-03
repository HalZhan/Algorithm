module.exports = function (arr = []) {
    let counter = [],
        result = [];
    if (arr.length) {
        let max = Math.max(...arr),
            min = Math.min(...arr),
            counter = Array(max).fill(0);
        for (let num of arr) {
            counter[num] = counter[num] ? counter[num] + 1 : 1;
        }
        for (let i = 0; i < counter.length; i++) {
            for (let j = 0; j < counter[i]; j++) {
                result.push(i);
            }
        }
    }
    return result;
}