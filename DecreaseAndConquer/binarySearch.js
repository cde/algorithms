// Given a sorted array of unique integers, and a target value determine the index of a matching value within the array. If there is not match, return -1.
//
// Input: [1,3,4,5,6,7,8,10,11,13,15,17,20,22], 17
//
// Output: 11

// Binary search is a foundational search algorithm used to find the index of a
// value within a sorted array. It converges at a solution in logarithmic time
// O(log(N)) which is quicker than performing a linear search.
// Binary search uses a process of elimination to discard of
// the potential locations where a value could be.

function binarySearch (array, target) {
    let left = 0;
    let right = array.length - 1
    let mid;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (array[mid] === target) { return mid }

        if(array[mid] > target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return -1
}