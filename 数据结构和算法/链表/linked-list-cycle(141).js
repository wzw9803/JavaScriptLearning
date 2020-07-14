/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let map = new Set();
  let cur = head;
  while(cur){
    if(map.has(cur)) return true;
    map.add(cur);
    cur = cur.next;
  }

  return false;
};

//---------------------------------------------------------------

//快慢指针
var hasCycle1 = function(head) {
  let fastP = head
  let slowP = head
  while (fastP) { // 快指针没有指向null
    if (fastP.next == null) return false // 下一个为null了，没有环
    slowP = slowP.next // 快的前面都有节点，慢的前面当然有
    fastP = fastP.next.next // 推进2个节点
    if (slowP === fastP) return true // 快慢指针相遇，有环
  }
  return false // fastP为null了也始终不相遇
};