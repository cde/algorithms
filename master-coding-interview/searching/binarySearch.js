// list is ordered
// import { BinarySearchTree }  from './breadthFirstSearch.js'
// https://leetcode.com/problems/validate-binary-search-tree/submissions/
let BinarySearchTree = require('./breadthFirstSearch.js');
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

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

let root = [5,1,4,null,null,3,6]
const tree = new BinarySearchTree();
for(let i= 0; i < root.length; i++){
    tree.insert(root[i])
}

// console.log(validateBinarySearch([2,3,1]))
console.log(isValidBSTR(root))
console.log(isValidBST(root))

// const tree = new BinarySearchTree();
// tree.insert(2)
// tree.insert(3)
// tree.insert(1)
// console.log(tree)