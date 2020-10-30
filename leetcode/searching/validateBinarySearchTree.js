// https://leetcode.com/problems/validate-binary-search-tree/submissions/

//Recursive
function isValidBSTR (root){
    if (root === null) return true;

    function validateBinarySearch(node, min, max){
        if(!node) { return true}
        if(node.val > max || node.val < min) { return false }

        return validateBinarySearch(node.left,min, node.val - 1) &&
            validateBinarySearch(node.right,node.val + 1, max)
    }
    return validateBinarySearch(root, -Infinity, Infinity)
}

// Iterative
function isValidBST (root){
    if (root === null) return true;

    let queue = []
    let prev = -Infinity
    let currentNode = root

    while(currentNode || queue.length > 0) {
        while(currentNode) {
            queue.push(currentNode)
            currentNode = currentNode.left
        }
        currentNode = queue.pop()
        if(prev >= currentNode.val) return false
        prev = currentNode.val
        currentNode = currentNode.right
    }
    return true
}