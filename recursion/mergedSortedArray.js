function mergeSortedArray(arr1,arr2) {
    let result = []
    let totalElements = arr1.length + arr2.length

    function compare(i,j){
        if (i + j >= totalElements){ return }

        if( j >= arr2.length || i < arr1.length && arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i ++;
        } else {
            result.push(arr2[j]);
            j ++
        }
        compare(i,j)
    }

    compare(0,0)
    return result;
}

console.log(mergeSortedArray([1, 4, 7], [2, 3, 6, 9]))