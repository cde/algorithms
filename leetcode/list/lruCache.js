class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LRUCache {
    constructor(capacity = 3) {
        this.size = 0;
        this.capacity = capacity
        this.cache = {}
        this.head = new Node('dh', 0)
        this.tail = new Node('dt', 0)
        this.head.next = this.tail
        this.tail.prev = this.head
    }

    get (key) {
        let node = this.cache[key]
        if(node === undefined || node === null) { return -1 }

        this.remove(node)
        this.add(node)
        return node.value

    }

    put (key, value) {
        const node = this.cache[key]

        if(node === undefined || node === null) {
            let newNode = new Node(key,value)
            this.cache[key] = newNode
            this.add(newNode)
            this.size++

            this.ensureCapacity();
        } else {
            node.value = value
            this.remove(node);
            this.add(node);
        }
    }

    remove(node){
        // Remove an existing node from the linked list.

        let prevNode = node.prev
        let newNode = node.next

        prevNode.next = newNode
        newNode.prev = prevNode

    }

    add(node) {
        node.prev = this.head
        node.next = this.head.next

        this.head.next.prev = node
        this.head.next = node
    }

    ensureCapacity(){
        if(this.size > this.capacity) {
            let tailPrevious = this.tail.prev
            this.remove(tailPrevious)
            delete this.cache[tailPrevious.key]
            this.size--;
        }
    }
}