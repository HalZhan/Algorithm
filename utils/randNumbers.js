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

module.exports = randNumbers;