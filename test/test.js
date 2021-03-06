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