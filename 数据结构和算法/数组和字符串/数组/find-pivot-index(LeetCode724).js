/**
 * leetCode 724
 * 
 * https://leetcode-cn.com/problems/find-pivot-index/
 * 
 * @param {number[]} nums
 * @return {number}
 */

let nums = [1,2,3]

var pivotIndex = function(nums) {
  let begindex = Math.floor(nums.length/2) - 1;
  let res = [];
  let queue = [];
  let outItems = new Set();
  queue.push(begindex);
  outItems.add(begindex);

  while(queue.length > 0){//cur >= 0 && cur < nums.length
    let cur = queue.shift();
    let sumQ = 0;
    let sumH = 0;
    for(let i = 0; i < cur; i++){
      sumQ += nums[i];
    }
    for(let j = cur+1; j < nums.length; j++){
      sumH += nums[j];
    }

    if(sumH === sumQ){
      res.push(cur);
    }

    let beforeIndex = cur - 1;
    if(beforeIndex >= 0 && !outItems.has(beforeIndex)){
      queue.push(beforeIndex);
      outItems.add(beforeIndex);
    }

    let afterIndex = cur + 1;
    if(afterIndex < nums.length && !outItems.has(afterIndex)){
      queue.push(afterIndex);
      outItems.add(afterIndex);
    }
  }

  console.log(res)
  console.log(Math.min.apply(null,[1]))

  return res.length === 0? -1 : Math.min.apply(null,res)
};

console.log(pivotIndex(nums));

//--------------------------------------------------------------------
//解法二：
//解题思路：
//S 为数组总和
//S = leftsum+nums[i]+rightsum，其中leftsum==rightsum。
//那么：leftsum = S - nums[i] - rightsum 可得：2*leftsum = S -nums[i]。
var pivotIndex1 = function(nums) {
  let total = nums.reduce((total, num) => {
      return total + num
  }, 0)
  let sum = 0
  for(let i = 0; i < nums.length; i++) {
      if(sum == total - sum - nums[i]) {
          return i
      }
      sum += nums[i]
  }
  return -1
};