
class ListNode{
    constructor(value, previous, next){
        this.value = value;
        this.next = next ? next : null
        this.previous = previous ? previous : null
    }
}

class doublyLinkedList{
    constructor(value) {
        this.head = new ListNode(value);
        this.tail = this.head;
        this.length = 1;
    }
    append (value) {
        const newNode = new ListNode(value, this.tail);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new ListNode(value, null,this.head);
        // newNode.next = this.head
        // this.head.previous = newNode
        this.head = newNode
        this.length++
        return this;
    }

    insert(value, index) {
        if (index < 0 ) { return }
        if(index >= this.length){
            this.append(value)
            return this.printList();
        }
        if(index === 0) {
            this.prepend(value)
            return this.printList();
        } else {
            const newNode = new ListNode(value);
            const leader = this.traverseToIndex(index - 1)
            const follower = leader.next
            leader.next = newNode;
            newNode.previous = leader;
            newNode.next = follower;
            follower.previous = newNode
            this.length++;
            return this.printList()
        }
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while(currentNode && counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    remove(index){
        if (index < 0 ) { return }
        //[ 1, 10, 5, 16, 88 ]
        if(index === 0) {
            this.head = this.head.next
            this.head.previous = null
        }else{
            //[ 1, 10, 5, 16, 88 ]
            const leader = this.traverseToIndex(index - 1)
            const follower = leader.next.next
            leader.next = follower
            follower.previous = leader
        }
        this.length--;
        console.log(this)
        this.printList()
    }

    printList(){
        const array = []
        let currentNode = this.head
        while(currentNode && currentNode !== null){
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array
    }
}

let myLinkedList = new doublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
console.log(myLinkedList.printList())
myLinkedList.insert(99,1)
console.log(myLinkedList.printList())
// console.log(myLinkedList)
myLinkedList.remove(0)
console.log(myLinkedList.printList())

// myLinkedList.insert(0,0)
// myLinkedList.insert(99,2)
// myLinkedList.insert(88,20)
// console.log(myLinkedList.printList());
// myLinkedList.remove(2)
// console.log(myLinkedList.printList());
// myLinkedList.remove(0)
// console.log(myLinkedList.printList());
// myLinkedList.insert(99,2)


// console.log(myLinkedList.head);