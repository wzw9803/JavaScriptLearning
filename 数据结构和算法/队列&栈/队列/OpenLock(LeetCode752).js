/**
 * LeetCode 752
 * 
 * 题解：
 * 使用BFS
 * https://leetcode-cn.com/problems/open-the-lock/solution/wo-xie-liao-yi-tao-bfs-suan-fa-kuang-jia-jian-dao-/
 */


const deadends = ["0201", "0101", "0102", "1212", "2002"],
  target = "0202"

/**
 * 字符串版本 运行速度慢
 * 数字版，运行加快
 * 
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  const limits = target.length;

  //字符串版
  // let outNums = new Set(deadends);

  //转换成数字，速度更快
  let outNums = new Set(deadends.map(val => parseInt(val)));
  target = parseInt(target);

  let queue = [];
  let step = 0;

  let begin = '0000';

  // if(!outNums.has(begin)){
  //   queue.push(begin);
  //   outNums.add(begin);
  // }

  if(!outNums.has(parseInt(begin))){
    queue.push(parseInt(begin));
    outNums.add(parseInt(begin));
  }

  while (queue.length > 0) {
    let len = queue.length;

    while (len) {
      len--;

      let cur = queue.shift();
      if (cur === target) return step;

      let loop = limits;
      while (loop) {
        loop--;

        // let curup = TurnUpOne(cur, loop);  //字符串板
        let curup = TurnUpOneInt(cur, loop, limits); //换成数字板，来寻找演变值
        if (!outNums.has(curup)) {
          queue.push(curup);
          outNums.add(curup);
        }

        // let curdown = TurnDownOne(cur, loop);
        let curdown = TurnDownOneInt(cur, loop, limits);
        if (!outNums.has(curdown)) {
          queue.push(curdown);
          outNums.add(curdown);
        }

      }
    }

    step++;
  }

  return -1;
};

let TurnUpOneInt = function (Roulette, index, limits) {
  
  //与字符串相似，从左往右计数，也就是从千位开始
  let num = 10 ** index;
  let old = Math.floor(Roulette / (num * 10));
  let now;

  now = Math.floor((Roulette + num) / (num * 10));
  Roulette = old === now ? (Roulette + num) : (Roulette - num * 9);

  return Roulette;
}

let TurnDownOneInt = function (Roulette, index, limits) {
  
  //与字符串相似，从右往左计数，也就是从个位开始
  let num = 10 ** index;
  let old = Math.floor(Roulette / (num * 10));
  let now;

  now = Math.floor((Roulette - num) / (num * 10));
  Roulette = old === now ? Roulette - num : (Roulette + num * 9);

  return Roulette;
}


let TurnUpOne = function (Roulette, index) {
  let res = Roulette.split('');
  res[index] = (parseInt(res[index]) + 1) % 10;

  return res.join('');
}

let TurnDownOne = function (Roulette, index) {
  let res = Roulette.split('');
  res[index] = (parseInt(res[index]) - 1 + 10) % 10;

  return res.join('');
}

console.log(openLock(deadends, target));

//------------------------------------------------------------------

//网上解法：
//双向 BFS 搜索
var openLock1 = function(deadends, target) {
  /**密码锁的密码个数 */
  const limits = target.length;
  target = parseInt(target, 10);
  /**过滤集合 */
  let close = new Set();
  deadends.forEach(str => close.add(parseInt(str, 10)));

  if (close.has(0)) {
      return -1;
  }
  let headQueue = new Set([0]);
  let tailQueue = new Set([target]);
  /**最少转动次数 */
  let times = 0;
  while(headQueue.size && tailQueue.size) {
      let thisSet = new Set();
      for(let curr of headQueue){
          if(tailQueue.has(curr)){
              return times;
          }
          let loop = limits;
          while(loop){
              loop--;
              let upNext = getNext(curr, 10 ** loop, true);
              if(!close.has(upNext)){
                  thisSet.add(upNext);
              }
              let downNext = getNext(curr, 10 ** loop, false);
              if(!close.has(downNext)){
                  thisSet.add(downNext);
              }
          }
      }
      headQueue = tailQueue;
      tailQueue = thisSet;
      times++;
  }
  return -1;
}
/**
* @param {number} curr 当前要衍变的值
* @param {number} num 演变位数
* @param {boolean} isUp 是否向上衍变
* @return {number}
*/
var getNext = (curr, num, isUp) => {
  let old = Math.floor(curr / (num * 10));
  let now;
  if (isUp) {
      now = Math.floor((curr + num) / (num * 10));
      curr = old === now ? (curr + num) : (curr - num * 9);
  } else {
      now = Math.floor((curr - num) / (num * 10));
      curr = old == now ? curr - num : (curr + num * 9);
  }
  return curr;
}

// console.log(openLock1(deadends, target));