#### 方法1：暴力法

```javascript
var hasCycle = (head) => {
  let cur = head;
  let step1 = 0
  while (cur) {
    step1++
    let step2 = 0
    let cur2 = head
    while (cur2) {
      step2++
      if (cur==cur2) {
        if (step1==step2) {
          break
        } else {
          return true
        }
      }
      cur2=cur2.next
    }
    cur = cur.next
  }
  return false;
};
```

#### 方法2：借助哈希表

```javascript
var hasCycle = (head) => {
  let map = new Map()
  while (head) {
    if (map.has(head)) return true
    map.set(head, true)
    head = head.next
  }
  return false
}
```

#### 方法3：快慢指针

- 两个指针 p1 和 p2 ，初始指向头节点
- 开启循环，p1 每次推进 1 个节点，p2 每次推进 2 个节点，不断比较它们指向的节点
- 如果出现相同，说明有环，如果不同，继续循环

```javascript
var hasCycle = (head) => {
  let fastP = head
  let slowP = head
  while (fastP) { // 快指针没有指向null
    if (fastP.next == null) return false // 下一个为null了，没有环
    slowP = slowP.next // 快的前面都有节点，慢的前面当然有
    fastP = fastP.next.next // 推进2个节点
    if (slowP === fastP) return true // 快慢指针相遇，有环
  }
  return false // fastP为null了也始终不相遇
}
```

