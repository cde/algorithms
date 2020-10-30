class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

}

// Linked List LIFO
class Stack {
    constructor(){
        this.array = []
    }

    peek() {
        return this.array[this.array.length - 1]
    }

    push(value) {
        const newNode = new Node(value);
        this.array.push(newNode);
        return this;
    }

    pop() {
        this.array.pop();
        return this;
    }

    lookup(value){
        let currentNode = this.top
        while(currentNode) {
            if(currentNode.value === value){
                return currentNode
            } else {
                currentNode = currentNode.next
            }
        }
        return null;
    }
}
const myStack = new Stack()
myStack.push(0)
myStack.push(1)
myStack.push(1)
myStack.push(3)
myStack.push(4)
console.log(myStack.pop());
// console.log(myStack.peek())
console.log(myStack.lookup(11))


