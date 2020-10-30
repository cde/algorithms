function BubbleSort (array) {
//    [5,3,8,1,2] 0 1
//    [3,5,8,1,2] 1 2
//    [3,5,1,8,2] 2 3
//    [3,5,1,2,8] 3 4
//    [3,5,1,2,8] 0 1 1
//    [3,1,5,2,8] 1 2 1
//    [3,1,2,5,8] 2 3 1
//    [3,1,2,5,8] 3 4 1
//    [3,1,2,5,8] 0 1 2
    const len = array.length
    for(let i = 0; i < len; i++){
        for(let j = 0; j < len; j++){
            if(array[j] > array[j+1]){
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
            console.log(array)
        }
    }
    return array
}
//space complexity O(1)
//time complexity O(n^2)
console.log(BubbleSort([5,3,8,1,2]))