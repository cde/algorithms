
// Challenge 1 : Sorted Two Sum
// Given a sorted array of integers and a target value, determine if there exists two integers in the array that sum up to the target value.
//
//     See if you can solve this in O(N) time and O(1) auxiliary space.
// array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15]
// target = 8
// function sortedArrayTwoSum(array, target) {
//     let left = 0;
//     let right = array.length - 1
//     let mid = right / 2
//
//     while (left < right) {
//         if (array[left] + array[right] === target) {
//             return [array[left], array[right]]
//         }
//         if (array[left] + array[right] < target) {
//             left++
//         } else {
//             right--
//         }
//     }
//     return []
// }
// console.log(sortedArrayTwoSum(array, target))


// Example 1: Two Sum
// Given an array of integers, and a target value determine if there are two integers that add to the sum.
//

// Input: [4,2,6,5,7,9,10], 13
//
// Output: true

array =  [4,2,6,5,7,9,10]
target = 13
function twoSum(array, target){
    let cache = {};
    let current

    for(let i=0; i < array.length; i++) {
        current = array[i]
        if(cache[current]) { return true}

        console.log(target-current);
        cache[target - current] = true
    }
    console.log(cache);
    return false
}
console.log(twoSum(array, target))