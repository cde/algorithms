//efficient when the list is almost sorted
function insertionSort(array){
    const len = array.length
    for(let i = 1; i < len; i++){
        let current_val = array[i]
        let index = i
        while(index > 0 && array[index - 1] > current_val){
            array[index] = array[index - 1]
            index --;
        }
        array[index] = current_val
    }
    return array
}