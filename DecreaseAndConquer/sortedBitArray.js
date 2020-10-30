// Challenge 1 : Number of Ones in a Sorted Bit Array
// Given a sorted bit array (values of either 0 or 1), determine the number of 1’s in the array.
//
//     Perform this in O(log(N)) time complexity.
//
//     Input: [0,0,0,1,1,1,1,1,1,1,1]
//
// Output: 8

function sortedBitArray(arr) {
    let start = 0
    let end = arr.length - 1
    let mid, count = 0;
    while (start <= end) {
        mid = Math.floor((start + end) / 2);

        if(arr[mid] === 1) {
            count += end - mid +1
            end = mid - 1
        } else {
            start = mid + 1
        }
    }
    return count
}

// [0,0,0,1,1,1,1,1,1,1,1]
// start = 0
// array[start] 0