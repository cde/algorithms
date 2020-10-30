/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.queue_in = []
    this.queue_out = []
    this.length = 0
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(value) {
    if(this.queue_out.length > 0) {
        for(let i = 0; i < this.queue_out.length; i++){
            this.queue_in.push(this.queue_out.pop())
        }
    }
    this.queue_in.push(value)
    this.length++;
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(this.queue_out.length == 0) {
        while(this.queue_in.length > 0) {
            this.queue_out.push(this.queue_in.pop())
        }
    }
    this.length--;
    return this.queue_out.pop()
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.queue_in.length > 0) {
        return this.queue_in[0];
    }
    return this.queue_out[this.queue_out.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.length === 0
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
const obj = new MyQueue()
obj.push(1)
obj.push(3)
obj.push(5)
console.log(obj)
console.log(obj.pop())
console.log(obj.pop())
console.log(obj)
obj.push(1)
console.log(obj)
// console.log(obj.peek())
obj.push(10)
console.log(obj)
console.log(obj.peek())
console.log(obj)

console.log(obj.pop())
console.log(obj.peek())