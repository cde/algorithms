function quickSort(array) {

    function partition(left, right){
        if(left >= right) { return }
        let mid = left

        for( let i = left; i < right; i++){
            if(array[i] < array[right]){
                [array[i], array[mid]] = [array[mid], array[i]]
                mid++
            }
        }

        [array[mid], array[right]] = [array[right], array[mid]]
        partition(left, mid-1)
        partition(mid+1, right)
    }

    partition(0, array.length - 1)
    return array
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(quickSort(numbers))