const forEachArr = (arr, res, index) => {
    if (!arr[index]) {
        return res;
    } else {
        res.push(arr[index])
        return forEachArr(arr, res, ++index);
    }
};

console.log(forEachArr([1, 2, 3, 4, 5, 6], [], 0))