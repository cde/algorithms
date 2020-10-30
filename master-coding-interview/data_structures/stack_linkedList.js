class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

}

// Linked List LIFO
class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top
    }

    push(value) {
        const newNode = new Node(value)
        if(this.length === 0) {
            this.top = newNode
            this.bottom = newNode
        } else {
            const holdingPointer = this.top
            this.top = newNode
            this.top.next = holdingPointer
        }
        this.length ++
        return this;
    }

    pop() {
        if(!this.top){
            return null
        }
        if(this.top === this.bottom) {
            this.bottom.next = null;
        }
        const holdingPointer = this.top
        this.top = this.top.next
        this.length --;
        return holdingPointer;
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
myStack.push(7)
console.log(myStack.peek())
console.log(myStack.lookup(11))
