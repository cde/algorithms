function mergeSort(array) {
    let len = array.length
    if(len === 1){
        return array
    }

    let mid = Math.floor(len / 2)
    let left = array.slice(0,mid)
    let right = array.slice(mid)

    return merge(
        mergeSort(left),
        mergeSort(right)
        )
}

function merge(left, right) {
    let result = []
    const leftLen = left.length
    const rightLen = right.length
    const totalElement = leftLen + rightLen
    let i = 0;
    let j = 0;

    while(result.length < totalElement) {
        if((j >= rightLen) || i < leftLen && left[i] < right[j]) {
            result.push(left[i])
            i++;
        } else {
            result.push(right[j])
            j++
        }
    }
    return result
}

// Time Complexity: O(Nlog(N))
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const answer = mergeSort(numbers);
console.log(answer);