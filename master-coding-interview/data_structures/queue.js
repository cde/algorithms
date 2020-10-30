class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(value){
        const newNode = new Node(value)
        if(this.empty()){
            this.head = newNode;
            this.tail = newNode;
        } else {
            //push node to the back of the queue by pointing
            // the last node to the new node
            this.tail.next = newNode;

            // move back pointer to new node
            this.tail = newNode
        }
        this.length++
        this.print();
    }

    dequeue(){
        // pointer to the front of the queue
        let node = this.head
        console.log("dequeue: ", node ? node.value : '');
        if(!this.empty()){
            this.head = this.head.next
        }
        if(!this.head){
            this.tail = null
        }
        this.length--;
        this.print();
    }

    empty(){
        // console.log(!this.head)
        return !this.head
    }

    print(){
        if(this.empty()){
            console.log('empty queue');
        } else {
            let tmpArray = []
            let tmp = this.head
            while(tmp) {
                tmpArray.push(tmp.value)
                tmp = tmp.next
            }
            console.log('QUEUE:', tmpArray.join(', '))
        }
    }
}

const myQueue = new Queue()
myQueue.enqueue("google")
myQueue.enqueue("yahoo")
myQueue.enqueue("apple")

myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()