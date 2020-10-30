// [ 3, 5, 8, 1, 2 ]
function selectionSort(array){
    const len = array.length

    for(let i = 0;  i < len; i++){
        let posMin = i;
        let min = array[i];
        for(let j = i + 1; j < len; j++){
            if(array[j] < array[posMin]) {
                posMin = j
            }
        }
        array[i] = array[posMin]
        array[posMin] = min
    }

    return array
}

console.log(selectionSort([ 3, 5, 8, 1, 2 ]))