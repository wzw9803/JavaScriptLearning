class Node {
  constructor(v, next) {
    this.value = v
    this.next = next
  }
}
class LinkList {
  constructor() {
    // 链表长度
    this.size = 0;
    // 虚拟头部
    this.dummyNode = new Node(null, null);
  }
  find(header, index, currentIndex) {
    if (index === currentIndex) return header;
    return this.find(header.next, index, currentIndex + 1);
  }
  checkIndex(index) {
    if (index < 0 || index > this.size) throw Error('Index error');
  }
  addNode(v, index) {
    this.checkIndex(index);
    // 当往链表末尾插入时，prev.next 为空
    // 其他情况时，因为要插入节点，所以插入的节点
    // 的 next 应该是 prev.next
    // 然后设置 prev.next 为插入的节点
    let prev = this.find(this.dummyNode, index, 0);
    prev.next = new Node(v, prev.next);
    this.size++;
    return prev.next;
  }
  insertNode(v, index) {
    return this.addNode(v, index);
  }
  addToFirst(v) {
    return this.addNode(v, 0);
  }
  addToLast(v) {
    return this.addNode(v, this.size);
  }
  removeNode1(index, isLast) {
    this.checkIndex(index);
    index = isLast ? index - 1 : index;
    let prev = this.find(this.dummyNode, index, 0);
    let node = prev.next;
    prev.next = node.next;
    node.next = null;
    this.size--;
    return node;
  }
  removeNode2(index) {
    this.checkIndex(index);
    index =  index - 1;
    let prev = this.find(this.dummyNode, index, 0);
    let node = prev.next;
    prev.next = node.next;
    node.next = null;
    this.size--;
    return node;
  }
  removeFirstNode() {
    return this.removeNode(0);
  }
  removeLastNode() {
    return this.removeNode(this.size, true);
  }
  
  getNode(index) {
    this.checkIndex(index);
    if (this.isEmpty()) return;
    return this.find(this.dummyNode, index, 0);
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
}

// let list  = new LinkList();
// list.addToLast(10);
// list.addToLast(20);
// list.addToLast(30);
// list.addToLast(40);
// let cur = list.dummyNode;
// let index = 0;
// while(cur !== null){
//   console.log(`${index++}: ${cur.value} - ${cur.next}`);
//   cur = cur.next;
// }
// list.addToFirst(50);

// cur = list.dummyNode;
// index = 0;
// while(cur !== null){
//   console.log(`${index++}: ${cur.value} - ${cur.next}`);
//   cur = cur.next;
// }

// // list.removeLastNode();
// list.removeNode2(2);

// cur = list.dummyNode;
// index = 0;
// while(cur !== null){
//   console.log(`${index++}: ${cur.value} - ${cur.next}`);
//   cur = cur.next;
// }

//---------------------------------------------------------------------------------------------

class Node {
  constructor(v, next) {
    this.value = v
    this.next = next
  }
}
/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
  this.size = 0;
  this.head = new Node(null,null);
};

MyLinkedList.prototype.checkIndex = function(index){
  if(index < 0 || index > this.size) throw Error('index error');
}

MyLinkedList.prototype.find = function(head, index, currentIndex){
  this.checkIndex(index);
  if (index === currentIndex) return head;
  return this.find(head.next, index, currentIndex+1);
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  let node = this.find(this.head, index+1, 0);
  if(node){
     return node.value;
  }else{
    return -1;    
  }
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  return this.addAtIndex(0, val);
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  return this.addAtIndex(this.size, val);
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  index = index <= 0 ? 0 : index;
  let prev = this.find(this.head, index, 0);
  let temp = prev.next;
  prev.next = new Node(val,temp);
  this.size++;

  return prev.next;
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  let prev = this.find(this.head, index, 0);
  let temp = prev.next;
  prev.next = temp.next;
  this.size--;

  return temp;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

let list  = new MyLinkedList();
list.addAtHead(10);
list.addAtHead(20);
list.addAtHead(30);
list.addAtHead(40);
let cur = list.head;
let index = 0;
while(cur !== null){
  console.log(`${index++}: ${cur.value} - ${cur.next}`);
  cur = cur.next;
}
list.addAtTail(50);

cur = list.head;
index = 0;
while(cur !== null){
  console.log(`${index++}: ${cur.value} - ${cur.next}`);
  cur = cur.next;
}

// list.removeLastNode();
list.deleteAtIndex(2);

cur = list.head;
index = 0;
while(cur !== null){
  console.log(`${index++}: ${cur.value} - ${cur.next}`);
  cur = cur.next;
}
console.log(list.get(0));
console.log(list.get(1));
console.log(list.get(2));
cur = list.head;
index = 0;
while(cur !== null){
  console.log(`${index++}: ${cur.value} - ${cur.next}`);
  cur = cur.next;
}

