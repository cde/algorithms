//sorted array
// [1,2,3,3,7]
let array =  [1,2,3,3,7]
let target = 9
function hasPairWithSum(array, target) {
    let len = array.length - 1
    for( let i=0; i < len; i++){
        for(let j= i+1;  j < len; j++){
            if(array[i]+array[j] === target){return true}
        }
    }
    return false;
}
//O(n^2) - Time Complexity O(n*n)
//O(a) - Space Complexity

hasPairWithSum(array, target)

// unordered array
function hasPairWithSum2(array, target) {
    const set = new Set()
    const len = array.length - 1
    for(let i = 0; i < len; i++){
        if(set.has(array[i])){ return true}
        set.add(target - array[i])
    }
    return false
}

hasPairWithSum2([6,4,3,2,1,7], 9)

// O(n) time complexity
// O(n)space complexity