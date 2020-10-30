function flattenArray(arr) {
    let result = []

    function traverse(elem) {
        if(!Array.isArray(elem)) {
            result.push(elem)
            return
        }
        for(let i = 0; i < elem.length; i++) {
            traverse(elem[i]);
        }
    }
    traverse(arr)
    return result;
}
console.log(flattenArray([1, [2, 3, [4]], 5, [[6]]]))