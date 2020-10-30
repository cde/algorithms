// Example:
//
//     Given this linked list: 1->2->3->4->5
//
// For k = 2, you should return: 2->1->4->3->5
//
// For k = 3, you should return: 3->2->1->4->5

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class ListNode{
    constructor(value, next){
        this.value = value;
        this.next = next
    }
}

class LinkedList{
    constructor(value) {
        this.head = new ListNode(value);
        this.tail = this.head;
        this.length = 1;
    }
    append (value) {
        const newNode = new ListNode(value);
        this.tail.next = newNode;
        this.tail = newNode
        this.length ++
        return this;
    }

    prepend(value) {
        const newNode = new ListNode(value);
        // let prev = this.head
        // this.head = newNode
        // this.head.next = prev
        newNode.next = this.head
        this.head = newNode
        this.length ++
        return this;
    }

    insert(value, index) {
        if (index < 0 || index > this.length) {
            return
        }
        const newNode = new ListNode(value);
        if(index === 0) {
            this.prepend(value)
        }
        if(index === this.length) {
            let prev = this.head
            for( i in index - 1){
                prev = prev.next
            }
        }
    }
}
// 1->2->3->4->5
let myLinkedList = new LinkedList(1);
myLinkedList.append(2);
// myLinkedList.append(3);
// myLinkedList.append(4);
// myLinkedList.append(5);
// myLinkedList.prepend(15);
// console.log(myLinkedList.head);


var reverseKGroup = function(head, k) {
    if (!head || !head.next || k <= 1) return head;

    let dummy = new ListNode(-1)
    let newHead = dummy
    let currentNode = head

    while(currentNode) {
        let groupHead = currentNode
        let counter = 1
        while(currentNode && counter < k){
            currentNode = currentNode.next
            counter ++
        }
        if(currentNode && counter === k ){
            let nextGroupHead = currentNode.next
            currentNode.next = null
            newHead.next = reverse(groupHead)
            currentNode = nextGroupHead
        } else {
            newHead.next = groupHead
        }
        newHead = groupHead
    }
    return dummy.next;
};


// O(n) time & O(1) space
function reverse(head) {
    let node = head,
        previous,
        tmp;
    while (node) {
        // save next before we overwrite node.next!
        tmp = node.next;
        // reverse pointer
        node.next = previous;
        // step forward in the list
        previous = node;
        node = tmp;
    }
    return previous;
}

function printList(head){
    const array = []
    let currentNode = head
    while(currentNode && currentNode !== null){
        array.push(currentNode.value)
        currentNode = currentNode.next
    }
    return array
}


// console.log(reverse(myLinkedList.head))
let result = reverseKGroup(myLinkedList.head,2)
console.log(printList(result))