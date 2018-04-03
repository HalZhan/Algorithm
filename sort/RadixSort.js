module.exports = function RadixSort(arr = []) {
    if (arr.length) {
        let max = Math.max(...arr),
            maxDigit = String(max).length,
            counter = [],
            div = 1,
            mod = 10;
        for (let i = 0; i < maxDigit; i++ , div *= 10, mod *= 10) {
            for (let j = 0; j < arr.length; j++) {
                let bucket = Math.floor((arr[j] % mod) / div);
                if(!Array.isArray(counter[bucket])) {
                    counter[bucket] = [];
                }
                counter[bucket].push(arr[j]);
            }
            let pos = 0;
            for (let j = 0; j < counter.length; j++) {
                let value = null;
                while (counter[j] && (value = counter[j].shift()) != null) {
                    arr[pos++] = value;
                }
            }
        }
    }
    return arr;
}