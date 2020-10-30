function bitArraySort(array) {
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        while (array[left] === 0) { left++  };
        while (array[right] === 1) { right -- };

        if(left > right ){
            array[left], array[right] = array[right], array[left]
        }
    }
    return array
}
//Time complexity O(n)


// Challenge 1: Sort a Bit Array
// Given a bit array, return it sorted in-place (a bit array is simply an array that contains only bits, either 0 or 1).
//
// See if you can solve this in O(N) time and O(1) auxiliary space.
//
// Try to solve this using a frequency count rather than using multiple pointers, or using a comparison sort function.

// Input : [0, 1, 1, 0, 1, 1, 1, 0]
// Output : [0, 0, 0, 1, 1, 1, 1, 1]

function sortBitArray(array) {
    let count = {}

    for(let i=0; i < array.length; i++) {
       if(array[i] in count){
           count[array[i]] +=1
       }else{
           count[array[i]] = 1
       }
    }
    console.log(count)
    for(let i = 0; i < count[0]; i++){
        // console.log(i)
        array[i] = 0;
    }
    for(let j = count[0]; j < array.length; j++){
        console.log(j)
        array[j] = 1
    }
    return array
}

function bitArraySort(arr){
    let mid = 0;
    for(let i = 0; i < arr.lenght; i++) {
        if(arr[i] === 0) {
            [arr[mid], arr[i]] = [arr[i],  arr[mid]];
            mid++
        }
    }
    return arr;
}