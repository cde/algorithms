class ListNode{
    constructor(value, next){
        this.value = value;
        this.next = next ? next : null
    }
}

class LinkedList{
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    append (value) {
        const newNode = new ListNode(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new ListNode(value);
        newNode.next = this.head
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
            const holdingPointer = leader.next
            leader.next = newNode;
            newNode.next = holdingPointer;
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
        }else{
            const leader = this.traverseToIndex(index - 1)
            const holdingPointer = leader.next.next
            leader.next = holdingPointer
        }
        this.length--;
        this.printList();
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

    reverse(){
        if(!this.head.next) { return this.head }

        let first = this.head;
        this.tail = this.head;
        let second = first.next
        // console.log('first', first)
        // console.log('second', second)
        while(second ){
            let temp = second.next
            second.next = first
            first = second
            second = temp
            // console.log('first', first)
            // console.log('second', second)
            // console.log("================")
        }
        this.head.next = null
        this.head = first
        this.printList()
    }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(0,0)
myLinkedList.insert(99,2)
myLinkedList.insert(88,20)
// console.log(myLinkedList.printList());
myLinkedList.remove(2)
// console.log(myLinkedList.printList());
myLinkedList.remove(0)
console.log(myLinkedList.printList());
// myLinkedList.insert(99,2)
console.log(myLinkedList.reverse());
console.log(myLinkedList.printList());