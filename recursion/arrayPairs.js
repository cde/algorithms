function arrayPairs(arr) {
    let result = [];

    function traverse(index) {
        if (index >= arr.length) {
            return
        }
        if ((index + 1) < arr.length){
            result.push([arr[index], arr[index + 1]])
        } else {
            result.push([arr[index], -1])
        }
        traverse(index + 2)
    }

    traverse(0);
    return result;
}
array = [1, 2, 3, 4, 5 ]
console.log(arrayPairs(array))