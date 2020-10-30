class Node {
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while(true) {
                if(value < currentNode.value){
                    if(!currentNode.left){
                        currentNode.left = newNode
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    if(!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }

    }

    breadthFirstSearch() {
        let currentNode = this.root;
        let list = [];
        let queue = [];
        queue.push(currentNode);
        console.log(queue)

        while(queue.length > 0){
            currentNode = queue.shift();
            console.log(currentNode);
            list.push(currentNode.value);
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return list
    }

    breadthFirstSearchR (queue, list) {
        if (!queue.length) {
            return list;
        }
        let currentNode = queue.shift();
        list.push(currentNode.value);
        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        if (currentNode.right) {
            queue.push(currentNode.right);
        }
        return this.breadthFirstSearchR(queue, list)
    }

    DFSInOrder () {
        return traverseInOrder(this.root, []);

    }
    DFSPreOrder () {
        return traversePreOrder(this.root, []);
    }
}

function traverseInOrder(node,list) {
    console.log(node.value)
    if(node.left) {
        traverseInOrder(node.left, list);
    }
    list.push(node.value);
    if(node.right) {
        traverseInOrder(node.right, list);
    }
    return list
}
function traversePreOrder(node,list) {
    console.log(node.value)
    list.push(node.value);

    if(node.left) {
        traverseInOrder(node.left, list);
    }
    if(node.right) {
        traverseInOrder(node.right, list);
    }
    return list
}
//     9
//  4     20
//1  6  15  170
// const tree = new BinarySearchTree();
// tree.insert(9)
// tree.insert(4)
// tree.insert(6)
// tree.insert(20)
// tree.insert(170)
// tree.insert(15)
// tree.insert(1)
// console.log(tree)
// console.log(tree.breadthFirstSearch());
// console.log(tree.breadthFirstSearchR([tree.root], []));
// console.log(tree.DFSInOrder());
// console.log(tree.DFSPreOrder());

//     9
//  4     20
//1  6  15  170
// InOrder [1,4,6,9,15,20,170]
// PreOrder [9,4,1,6,20,15,170] => useful for recreating a tree
// PostOrder [1,6,4,15,170,20,9]

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}

module.exports = BinarySearchTree;