function quickSort (array) {

    function divide(start, end) {
        if (start >= end ) { return; }
        let mid = start;

        // To avoid worse case O(n^2), to take care of the case of decending order arrays
        // Randomly select and index and swapped with the last valuen within your range
        let randomIndex = Math.floor(Math.random(end - start)) + start;
        [array[randomIndex], array[end]] = [array[end], array[randomIndex]]

        const pivot = array[end]
        for(let i= start; i < array[end]; i++) { // we choose the pivot at the end of the array
            if(array[i] < pivot){
                [array[i], array[mid]] = [array[mid], array[i]]
                mid ++;
            }
        }
        [array[mid], array[end]] = [array[end], array[mid]];
        divide(start, mid - 1); // recurse left half
        divide( mid + 1, end) // recurse right half
    }

    divide(0, array.length - 1);
    return array;
}
console.log(quickSort([7,3,8,2,10,0]));