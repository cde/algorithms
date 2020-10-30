const boxes = [1,2,3,4,5]
//O(n*n) => O(n^2)
function logAllPairsOfArray(boxes) {
    let newBoxes = []
    for(let i=0; i <  boxes.length; i++) {
        for(let j=0; j < boxes.length; j++) {
            newBoxes.push([boxes[i], boxes[j]])
        }
    }
    return newBoxes
}

console.log(logAllPairsOfArray(boxes))