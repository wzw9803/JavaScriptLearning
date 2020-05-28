/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.len = k + 1;
  this.myQueue = new Array(this.len);
  this.head = 0;
  this.tail = 0;
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) {
    return false;
  }
  this.myQueue[this.tail] = value;
  this.tail = (this.tail + 1) % this.len;

  return true;
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) {
    return false;
  }

  this.head = (this.head + 1) % this.len;

  return true;
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  if (this.isEmpty()) {
    return -1;
  }

  return this.myQueue[this.head];
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  if (this.isEmpty()) {
    return -1;
  }

  return this.myQueue[(this.tail - 1 + this.len) % this.len];
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {

  return this.head === this.tail;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {

  return (this.tail + 1) % this.len === this.head;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

//网上解法：


/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue1 = function (k) {
  this.queue = new Array(k);
  this.headIndex = 0;
  this.count = 0;
  this.capacity = k;
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue1.prototype.enQueue = function (value) {
  if (this.isFull()) return false;
  let index = (this.headIndex + this.count) % this.capacity;
  this.queue[index] = value;
  this.count++;
  return true;
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue1.prototype.deQueue = function () {
  if (this.isEmpty()) return false;
  this.headIndex = (this.headIndex + 1) % this.capacity;
  this.count--;
  return true;
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue1.prototype.Front = function () {
  if (this.isEmpty()) return -1;
  return this.queue[this.headIndex];
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue1.prototype.Rear = function () {
  if (this.isEmpty()) return -1;
  let tailIndex = (this.headIndex + this.count - 1) % this.capacity;
  return this.queue[tailIndex];
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue1.prototype.isEmpty = function () {
  return 0 === this.count;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue1.prototype.isFull = function () {
  return this.count === this.capacity;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */