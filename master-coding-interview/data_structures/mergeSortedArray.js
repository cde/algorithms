function mergeSortedArrays(arr1, arr2) {
    let totalElements = arr1.length + arr2.length
    // [1,2,3] + [4,5,6]
    let i = 0
    let j = 0

    let result = []
    while(i + j < totalElements) {
        if(j >= arr2.length || arr1[i] < arr2[j] ){
            result.push(arr1[i])
            i +=1
        } else {
            result.push(arr2[j])
            j ++
        }
    }
    return result
}

// console.log(mergeSortedArrays([1,2,3],[4,5,6,7]))
console.log(mergeSortedArrays([], [3,4,6,30]));