/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  let map = new Set;
  let cur = head;

  while(cur){
    if(map.has(cur)){
      return cur;
    }
    map.add(cur);
    cur = cur.next;
  }

  return null;
};

//------------------------------------------------

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//快慢指针
var detectCycle1 = function(head) {
  let slowp = head;
  let fastp = head;

  while(fastp){
    if (fastp.next === null) return null;
    slowp = slowp.next;
    fastp = fastp.next.next;

    if(slowp === fastp) {
      fastp = head;
      while(1){
        if(slowp === fastp){
          return slowp;
        }
        fastp = fastp.next;
        slowp = slowp.next;
      }
    }
  }

  return null;
};